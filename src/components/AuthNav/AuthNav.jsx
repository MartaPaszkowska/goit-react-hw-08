import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

const AuthNav = () => {
	return (
		<div className={styles.wrap}>
			<NavLink
				to="/login"
				className={({ isActive }) =>
					isActive
						? `${styles.button} ${styles.activeButton}`
						: styles.button
				}
			>
				LOG IN
			</NavLink>
			<NavLink
				to="/register"
				className={({ isActive }) =>
					isActive
						? `${styles.button} ${styles.activeButton}`
						: styles.button
				}
			>
				REGISTRATION
			</NavLink>
		</div>
	);
};

export default AuthNav;
