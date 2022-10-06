import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useAuth from "../hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";

function AuthStatus() {
  let location = useLocation(); //lưu lại vị trí
  let auth = useAuth(); // dùng để xác thực nguoiwf dùng.
  let navigate = useNavigate(); //đưa tới trang mới

  if (!auth.isAuthenticated) {
    return (
      <Button
        color="inherit"
        startIcon={<LoginIcon />}
        component={Link}
        to="/login"
        state={{ backgroundLocation: location }}
      >
        Sign In
      </Button>
    );
  } else {
    return (
      <Button
        color="inherit"
        startIcon={<AccountCircleIcon style={{ width: 34, height: 34 }} />}
        endIcon={<LogoutIcon />}
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
        state={{ backgroundLocation: location }}
        style={{ textTransform: "none" }}
      >
        {auth.user.username}
      </Button>
    );
  }
}

export default AuthStatus;
