import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Typography } from "@mui/material";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
	return (
		<div className={styles.bg}>
			<Typography className={styles.title}>REGISTRATION</Typography>
			<RegisterForm />
		</div>
	);
};

export default RegistrationPage;
