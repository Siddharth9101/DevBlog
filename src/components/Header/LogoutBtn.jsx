import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await authService.logout().then(() => dispatch(logout()));
    window.location.reload();
  };
  return (
    <button
      className="inline-bock px-3 md:px-6 py-1 md:py-2 text-[12px] md:text-base duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
