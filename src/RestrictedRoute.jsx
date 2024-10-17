import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return !isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};

export default RestrictedRoute;

