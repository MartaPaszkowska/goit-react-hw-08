import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

export default function Contact({ contact }) {
	const dispatch = useDispatch();

	return (
		<li className={styles.contact}>
			<p className={styles.text}>{contact.name}</p>
			<p className={styles.text}>{contact.number}</p>
			<button
				type="button"
				className={styles.button}
				onClick={() => dispatch(deleteContact(contact.id))}
			>
				Delete
			</button>
		</li>
	);
}
