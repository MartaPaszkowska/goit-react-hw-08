import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearContactsOperation } from "../../redux/contacts/operations";
import styles from "./Layout.module.css";

const Layout = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(clearContactsOperation());
		};
	}, [dispatch]);

	return (
		<>
			<AppBar />
			<main className={styles.main}>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
