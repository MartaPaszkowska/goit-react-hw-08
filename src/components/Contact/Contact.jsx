import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ user }) {
	const dispatch = useDispatch();

	return (
		<li className={css.contactItem} key={user.id}>
			<p>{user.name}</p>
			<p>{user.number}</p>

			<button onClick={() => dispatch(deleteContact(user.id))}>
				Delete
			</button>
		</li>
	);
}

Contact.propTypes = {
	user: PropTypes.object.isRequired,
};
