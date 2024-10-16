import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

export default function SearchBox() {
	const dispatch = useDispatch();
	const userInput = useSelector(selectFilter);
	const onFilter = (evt) => {
		const name = evt.target.value;
		dispatch(changeFilter(name));
	};

	const id = useId();
	return (
		<div className={css.sContainer}>
			<input
				type="text"
				value={userInput}
				onChange={onFilter}
				name="searchContact"
				id={`${id}-'searchContact'`}
			/>
			<label htmlFor={`${id}-'searchContact'`}>
				Find contacts by name
			</label>
		</div>
	);
}
