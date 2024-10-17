import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filters/selectors";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
