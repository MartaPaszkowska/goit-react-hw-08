import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
	const navigate = useNavigate();
	const isLogin = useSelector(selectIsLoggedIn);

	useEffect(() => {
		if (isLogin) {
			navigate("/contacts");
		}
	}, [isLogin, navigate]);

	return (
		<div className={styles.bg}>
			<h2 className={styles.title}>LOGIN</h2>
			<LoginForm />
			<Link to="/register" className={styles.link}>
				Do not have an account? Please register
			</Link>
		</div>
	);
};

export default LoginPage;
