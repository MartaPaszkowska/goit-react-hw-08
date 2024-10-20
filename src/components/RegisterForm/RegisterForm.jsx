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

		dispatch(register(credentials));
		actions.resetForm();
	};

	const registerValid = Yup.object().shape({
		name: Yup.string()
			.min(3, "Minimum 3 characters.")
			.max(50, "Maximum 50 characters.")
			.required("Required."),
		email: Yup.string()
			.email("Invalid email format")
			.min(5, "Minimum 5 characters.")
			.max(50, "Maximum 50 characters.")
			.required("Required."),
		password: Yup.string()
			.min(8, "Minimum 8 characters.")
			.max(50, "Maximum 50 characters.")
			.required("Required."),
	});

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
			}}
			onSubmit={handleSubmit}
			validationSchema={registerValid}
		>
			<Form className={styles.form}>
				<div className={styles.container}>
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
						id={`email${id}`}
						required
					/>
					<label className={styles.label} htmlFor={`email${id}`}>
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
						id={`password${id}`}
						required
					/>
					<label className={styles.label} htmlFor={`password${id}`}>
						PASSWORD
					</label>
				</div>
				<button className={styles.button} type="submit">
					REGISTER
				</button>
			</Form>
		</Formik>
	);
}
