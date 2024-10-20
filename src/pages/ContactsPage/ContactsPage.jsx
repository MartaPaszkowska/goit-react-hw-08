import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import styles from "./ContactsPage.module.css";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className={styles.bg}>
			<div className={styles.container}>
				<ContactForm />
				<SearchBox />
				<ContactList />
			</div>
		</div>
	);
};

export default ContactsPage;
