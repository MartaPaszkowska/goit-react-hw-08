import { useDispatch } from "react-redux";
import { useId } from "react";
import { Form, Field, Formik } from "formik";
import { signIn } from "../../redux/auth/operations";

export default function LoginForm() {
	const dispatch = useDispatch();
	const labelID = useId();
	const handleSubmitForm = (values, actions) => {
		dispatch(signIn({ email: values.email, password: values.password }));
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			onSubmit={handleSubmitForm}
		>
			<Form autocomlete="off">
				<h1>Login Form</h1>
				<div>
					<Field
						type="email"
						name="email"
						id={`${labelID}-email`}
						placeholder=" "
					/>
					<label htmlFor={`${labelID}-email`}>Email</label>
				</div>
				<div>
					<Field
						type="password"
						name="password"
						id={`${labelID}-password`}
						placeholder=" "
					/>
					<label htmlFor={`${labelID}-password`}>Password</label>
				</div>
				<button type="submit">Log in</button>
			</Form>
		</Formik>
	);
}
