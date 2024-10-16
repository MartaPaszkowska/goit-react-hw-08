import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AutNav } from "../AutNav/AutNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
		<header>
			<Navigation />
			{isLoggedIn ? <UserMenu /> : <AutNav />}
		</header>
	);
}
