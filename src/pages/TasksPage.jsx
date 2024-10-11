import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import TaskList from "../components/TaskList";
import TaskEditor from "../components/TaskEditor";
import { fetchTasks } from "../redux/tasks/operations";
import { selectLoading } from "../redux/auth/selectors";

export default function TasksPage() {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectLoading);

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	return (
		<>
			<DocumentTitle>Your tasks</DocumentTitle>
			<TaskEditor />
			<div>{isLoading && "Request in progress..."}</div>
			<TaskList />
		</>
	);
}
