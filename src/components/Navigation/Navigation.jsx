import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css";

export default function Navigation() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	return (
		<nav className={styles.nav}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					isActive
						? `${styles.link} ${styles.activeLink}`
						: styles.link
				}
			>
				HOME
			</NavLink>

			{isLoggedIn && (
				<NavLink
					to="/contacts"
					className={({ isActive }) =>
						isActive
							? `${styles.link} ${styles.activeLink}`
							: styles.link
					}
				>
					CONSTACTS
				</NavLink>
			)}
		</nav>
	);
}
