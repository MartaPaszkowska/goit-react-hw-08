import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
	const id = useId();
	const dispatch = useDispatch();

	const initialValues = {
		email: "",
		password: "",
	};

	const loginValidation = Yup.object().shape({
		email: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
	});

	const handleSubmit = (values, actions) => {
		dispatch(login(values));
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={loginValidation}
		>
			<Form className={styles.form}>
				<div className={styles.inputContainer}>
					<Field
						className={styles.input}
						type="email"
						name="email"
						placeholder="Enter your email"
						id={`email-${id}`}
					/>
					<ErrorMessage
						name="email"
						component="span"
						className={styles.error}
					/>
					<label className={styles.label} htmlFor={`email-${id}`}>
						EMAIL
					</label>
				</div>

				<div className={styles.inputContainer}>
					<Field
						className={styles.input}
						type="password"
						name="password"
						placeholder="Enter your password"
						id={`password-${id}`}
					/>
					<ErrorMessage
						name="password"
						component="span"
						className={styles.error}
					/>

					<label className={styles.label} htmlFor={`password-${id}`}>
						PASSWORD
					</label>
				</div>
				<button className={styles.button} type="submit">
					Log in
				</button>
			</Form>
		</Formik>
	);
}
