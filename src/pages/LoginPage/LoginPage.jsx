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
			<p className={styles.title}>LOG IN</p>
			<LoginForm />
			<div className={styles.LinkContainer}>
				<Link to="/register" className={styles.Link}>
					If you do not have an account yet, please register
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
