import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import ContactListItem from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
	const filteredContacts = useSelector(selectFilteredContacts);
	return (
		<ul className={css.contactList}>
			{filteredContacts.map((user) => (
				<>
					<ContactListItem user={user} />
				</>
			))}
		</ul>
	);
}
