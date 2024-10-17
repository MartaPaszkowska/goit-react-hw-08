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

	const registerValidation = Yup.object().shape({
		name: Yup.string()
			.min(3, "MiregisterValidationnimum 3 characters.")
			.max(50, "Maximum 50 characters.")
			.required("Required"),
		email: Yup.string()
			.email("Invalid email format")
			.min(5, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		password: Yup.string()
			.min(6, "Minimum 6 characters.")
			.max(50, "Maximum 50 characters.")
			.required("Required"),
	});

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
			validationSchema={registerValidation}
		>
			<Form className={styles.form}>
				<div className={styles.inputContainer}>
					<Field
						className={styles.input}
						type="text"
						name="name"
						id={`name${id}`}
						placeholder="Enter your nick"
						required
					/>
					<ErrorMessage
						className={styles.error}
						name="name"
						component="span"
					/>
					<label className={styles.label} htmlFor={`name${id}`}>
						NICK
					</label>
				</div>

				<div className={styles.inputContainer}>
					<Field
						className={styles.input}
						type="email"
						name="email"
						placeholder="Enter your email"
						id={`email${id}`}
						required
					/>
					<ErrorMessage
						className={styles.error}
						name="email"
						component="span"
					/>
					<label className={styles.label} htmlFor={`email${id}`}>
						EMAIL
					</label>
				</div>
				<div className={styles.inputContainer}>
					<Field
						className={styles.input}
						type="password"
						name="password"
						placeholder="Enter your password"
						id={`password${id}`}
						required
					/>
					<ErrorMessage
						className={styles.error}
						name="password"
						component="span"
					/>
					<label className={styles.label} htmlFor={`password${id}`}>
						PASSWORD
					</label>
				</div>
				<button className={styles.button} type="submit">
					Register
				</button>
			</Form>
		</Formik>
	);
}
