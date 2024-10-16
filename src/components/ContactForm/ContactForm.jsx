import { useId } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const initialValues = {
	name: "",
	number: "",
};

const phoneBookSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "To Short")
		.max(50, "To Long!")
		.required("Required"),
	number: Yup.string()
		.min(6, "To Short")
		.max(12, "To Long!")
		.required("Required"),
});

export default function ContactForm() {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(addContact({ name: values.name, number: values.number }));
		actions.resetForm();
	};

	const idLabel = useId();
	return (
		<Formik
			onSubmit={handleSubmit}
			initialValues={initialValues}
			validationSchema={phoneBookSchema}
		>
			<Form className={css.formContainer} autoComplete="off">
				<Field
					type="text"
					name="name"
					id={`${idLabel}-'name'`}
					placeholder="John Kowalski"
				/>
				<label htmlFor={`${idLabel}-'name'`}>Name</label>
				<ErrorMessage name="name" component="span" />
				<Field
					className={css.phoneInput}
					type="text"
					name="number"
					id={`${idLabel}-'number'`}
					placeholder="123-456-7890"
				/>
				<label htmlFor={`${idLabel}-'number'`}>Number</label>

				<ErrorMessage name="number" component="span" />

				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
}
