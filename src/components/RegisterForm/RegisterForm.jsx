import { ErrorMessage, Field, Formik, Form } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";
import { register } from "../../redux/auth/operations";

export default function RegisterForm() {
	const id = useId();
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		const credentials = {
			name: values.name,
			email: values.email,
			password: values.password,
		};

		console.log("Register form values:", credentials);
		dispatch(register(credentials));
		actions.resetForm();
	};

	const addContactSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, "Name is too short! Minimum 3 characters.")
			.max(50, "Name is too long! Maximum 50 characters.")
			.required("Name is required."),
		email: Yup.string()
			.email("Invalid email format")
			.min(5, "Email is too short!")
			.max(50, "Email is too long!")
			.required("Email is required."),
		password: Yup.string()
			.min(8, "Password is too short! Minimum 8 characters.")
			.max(50, "Password is too long! Maximum 50 characters.")
			.required("Password is required."),
	});

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
			validationSchema={addContactSchema}
		>
			<Form className={styles.form}>
				<div className={styles.wrap}>
					<ErrorMessage
						className={styles.error}
						name="name"
						component="span"
					/>
					<Field
						className={styles.input}
						type="text"
						name="name"
						id={`name${id}`}
						placeholder="Enter your name"
						required
					/>
					<label className={styles.label} htmlFor={`name${id}`}>
						Name
					</label>
				</div>
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
						id={`email${id}`}
						required
					/>
					<label className={styles.label} htmlFor={`email${id}`}>
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
						id={`password${id}`}
						required
					/>
					<label className={styles.label} htmlFor={`password${id}`}>
						Password
					</label>
				</div>
				<button className={styles.button} type="submit">
					Register
				</button>
			</Form>
		</Formik>
	);
}
