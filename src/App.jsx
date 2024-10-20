import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import { selectIsRefreshing } from "./redux/auth/selectors";
import styles from "./App.module.css"; // Import for custom styles

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
	import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
	const dispatch = useDispatch();
	const isRefreshing = useSelector(selectIsRefreshing);

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	if (isRefreshing) {
		return <div className={styles.loading}>Loading...</div>; // Using custom styles for loading state
	}

	return (
		<Suspense fallback={<div className={styles.loading}>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route
						path="/register"
						element={
							<RestrictedRoute
								redirectTo="/contacts"
								component={RegistrationPage}
							/>
						}
					/>
					<Route
						path="/login"
						element={
							<RestrictedRoute
								redirectTo="/contacts"
								component={LoginPage}
							/>
						}
					/>
					<Route
						path="/contacts"
						element={
							<PrivateRoute
								redirectTo="/login"
								component={ContactsPage}
							/>
						}
					/>
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
