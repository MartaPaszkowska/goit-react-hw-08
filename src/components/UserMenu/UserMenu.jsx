import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className={styles.userMenu}>
			<Typography variant="body1" className={styles.greeting}>
				Hello, {user.name}!
			</Typography>
			<Button className={styles.button} onClick={handleLogout}>
				Log out
			</Button>
		</div>
	);
};

export default UserMenu;
