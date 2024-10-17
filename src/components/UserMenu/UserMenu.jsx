import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div >
      <Typography variant="body1" sx={{ marginRight: 2 }}>
        Hello, {user.name}!
      </Typography>
      <Button color="inherit" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
