import { NavLink } from "react-router-dom";

export const AutNav = () => {
	return (
		<div>
			<NavLink to="/register">Register</NavLink>
			<NavLink to="/login">Log in</NavLink>
		</div>
	);
};
