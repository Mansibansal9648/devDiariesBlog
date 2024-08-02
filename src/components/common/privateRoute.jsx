import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "../../contextApi/context";

function PrivateRoute({ children }) {
  const {
    store: { user },
  } = useAppContext();
  // console.log("Private route hit");
  let decisionInput = useLocation();
  if (!user.isLogin) {
    // console.log("user.isLogout hit");

    switch (decisionInput.pathname) {
      case "/":
      case "/home":
      case "/login":
      case "/register":
      case "/forgotpassword":
        return children;
      default:
        return <Navigate to="/" />;
    }

    // const validPath = ["/", "/home", "/login", "/register", "/forgotpassword"];
    // if(validPath.includes(decisionInput.pathname)){
    //   return children;
    // }else{
    //   return <Navigate to="/" />;
    // }
  }
  if (user.isLogin) {
    // console.log("user.isLogin hit");

    switch (decisionInput.pathname) {
      case "/":
      case "/home":
      case "/login":
      case "/register":
      case "/forgotpassword":
        return <Navigate to={`/userpage/${user.id}`} />;
        default:
        return children;
    }

    // const invalidPath = ["/", "/home", "/login", "/register", "/forgotpassword"];
    // if(invalidPath.includes(decisionInput.pathname)){
    //   return <Navigate to={`/userPage/${user.id}`} />;
    //   }else{
    //   return children;
    // }
  }
}

export default PrivateRoute;
