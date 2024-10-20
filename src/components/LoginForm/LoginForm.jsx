import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
	const id = useId();
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(login(values));
		actions.resetForm();
	};

	const loginValid = Yup.object().shape({
		email: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
	});

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
			validationSchema={loginValid}
		>
			<Form className={styles.form}>
				<div className={styles.container}>
					<ErrorMessage
						className={styles.error}
						name="email"
						component="span"
					/>
					<Field
						className={styles.input}
						type="email"
						name="email"
						placeholder="Enter your email"
						id={`email-${id}`}
					/>
					<label className={styles.label} htmlFor={`email-${id}`}>
						EMAIL
					</label>
				</div>
				<div className={styles.container}>
					<ErrorMessage
						className={styles.error}
						name="password"
						component="span"
					/>
					<Field
						className={styles.input}
						type="password"
						name="password"
						placeholder="Enter your password"
						id={`password-${id}`}
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
