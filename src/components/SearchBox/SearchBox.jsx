import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilter);

	const handleChange = (event) => {
		dispatch(changeFilter(event.target.value));
	};

	return (
		<div className={styles.form}>
			<p className={styles.text}>FIND CONTACT BY NAME</p>
			<input
				type="text"
				value={filter}
				onChange={handleChange}
				className={styles.input}
			/>
		</div>
	);
}
