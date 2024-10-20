import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
	return (
		<div className={styles.bg}>
			<h2 className={styles.title}>REGISTRATION</h2>
			<RegisterForm />
		</div>
	);
};

export default RegistrationPage;
