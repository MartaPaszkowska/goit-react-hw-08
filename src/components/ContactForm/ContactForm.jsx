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

	const addContactValidation = Yup.object().shape({
		email: Yup.string().required("Required"),
		password: Yup.string().required("Required"),
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
			validationSchema={addContactValidation}
		>
			<Form className={styles.form}>
				<div className={styles.inputContainer}>
					<Field type="text" name="name" className={styles.input} />
					<ErrorMessage
						name="name"
						component="p"
						className={styles.error}
					/>
					<label>NAME</label>
				</div>
				<div className={styles.inputContainer}>
					<Field type="text" name="number" className={styles.input} />
					<ErrorMessage
						name="number"
						component="p"
						className={styles.error}
					/>
					<label>NUMBER</label>
				</div>
				<button type="submit" className={styles.button}>
					Add Contact
				</button>
			</Form>
		</Formik>
	);
}
