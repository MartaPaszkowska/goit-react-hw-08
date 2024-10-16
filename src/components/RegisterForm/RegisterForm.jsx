import { useDispatch } from "react-redux";
import { useId } from "react";
import { Form, Field, Formik } from "formik";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
	const dispatch = useDispatch();
	const labelID = useId();
	const handleSubmitForm = (values, actions) => {
		dispatch(
			register({
				name: values.name,
				email: values.email,
				password: values.password,
			})
		);
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={{ name: "", email: "", password: "" }}
			onSubmit={handleSubmitForm}
		>
			<Form autocomlete="off">
				<h1>Register Form</h1>
				<div>
					<Field
						type="text"
						name="name"
						id={`${labelID}-name`}
						placeholder=" "
					/>
					<label htmlFor={`${labelID}-name`}>User Name</label>
				</div>
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
				<button type="submit">Register</button>
			</Form>
		</Formik>
	);
}
