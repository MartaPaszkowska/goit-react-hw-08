import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
	return (
		<div className={styles.container}>
			<Button className={styles.button} component={Link} to="/login">
				LOG IN
			</Button>
			<Button className={styles.button} component={Link} to="/register">
				REGISTRATION
			</Button>
		</div>
	);
};

export default AuthNav;
