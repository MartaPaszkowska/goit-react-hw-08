import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../ResctrictedRoute";
import PrivateRoute from "../PrivateRoute";
import css from "../App/App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
	import("../../pages/RegisterPage/RegisterPage")
);
const ContactsPage = lazy(() =>
	import("../../pages/ContactsPage/ContactsPage")
);

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return (
		<div className={css.appContainer}>
			<h1>Phonebook</h1>
			<Layout>
				<Suspense fallback={<div>Loading....</div>}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/login"
							element={
								<RestrictedRoute
									component={<LoginPage />}
									redirectTo="/contacts"
								/>
							}
						/>
						<Route
							path="/register"
							element={
								<RestrictedRoute
									component={<RegisterPage />}
									redirectTo="/"
								/>
							}
						/>
						<Route
							path="/contacts"
							element={
								<PrivateRoute
									component={<ContactsPage />}
									redirectTo="/login"
								/>
							}
						/>
					</Routes>
				</Suspense>
			</Layout>
		</div>
	);
}

export default App;
