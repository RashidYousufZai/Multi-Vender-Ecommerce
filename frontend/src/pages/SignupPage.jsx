import { useNavigate } from "react-router-dom";
import Signup from "../component/Signup.jsx/Signup";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SignupPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);
  return <Signup />;
};

export default SignupPage;
