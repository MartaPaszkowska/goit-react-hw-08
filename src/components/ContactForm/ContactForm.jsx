import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
	const dispatch = useDispatch();

	const initialValues = {
		name: "",
		number: "",
	};

	const FeedbackSchema = Yup.object().shape({
		name: Yup.string()
			.min(3, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		number: Yup.string()
			.min(3, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
	});

	const handleSubmit = (values, { resetForm }) => {
		const newContact = {
			id: nanoid(),
			name: values.name,
			number: values.number,
		};
		dispatch(addContact(newContact));
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}
		>
			<Form className={styles.form}>
				<label className={styles.label}>
					Name:
					<Field type="text" name="name" className={styles.input} />
					<ErrorMessage
						name="name"
						component="p"
						className={styles.error}
					/>
				</label>

				<label className={styles.label}>
					Number:
					<Field type="text" name="number" className={styles.input} />
					<ErrorMessage
						name="number"
						component="p"
						className={styles.error}
					/>
				</label>

				<button type="submit" className={styles.button}>
					Add Contact
				</button>
			</Form>
		</Formik>
	);
}
