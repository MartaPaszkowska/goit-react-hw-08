import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasks/operations";
import css from "../css/Task.module.css";

export default function Task({ id, text }) {
	const dispatch = useDispatch();

	const handleDelete = () => dispatch(deleteTask(id));

	return (
		<div className={css.wrapper}>
			<p className={css.text}>{text}</p>
			<button type="button" className={css.button} onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
}
