import { useNavigate } from "react-router-dom";
import Login from "../component/login/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);
  return <Login />;
};

export default LoginPage;
