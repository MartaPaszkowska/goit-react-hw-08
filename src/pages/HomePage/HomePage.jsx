import { Typography } from "@mui/material";
import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={styles.bg}>
			<Typography
				variant="h4"
				component="h1"
				gutterBottom
				className={styles.title}
			>
				Welcome to the Contacts Book!
			</Typography>
			<Typography variant="body1" className={styles.text}>
				This application allows you to manage your contacts efficiently.
				You can register, log in, and manage your personal contact
				collection.
			</Typography>
		</div>
	);
};

export default HomePage;
