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

	const loginSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email format")
			.min(5, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		password: Yup.string()
			.min(8, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
	});

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
			validationSchema={loginSchema}
		>
			<Form className={styles.form}>
				<div className={styles.wrap}>
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
						Email
					</label>
				</div>
				<div className={styles.wrap}>
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
						Password
					</label>
				</div>
				<button className={styles.button} type="submit">
					Log in
				</button>
			</Form>
		</Formik>
	);
}
