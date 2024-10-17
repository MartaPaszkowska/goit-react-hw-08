import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
	return (
		<div className={styles.bg}>
			<p className={styles.title}>REGISTRATION</p>
			<RegisterForm />
		</div>
	);
};

export default RegistrationPage;
