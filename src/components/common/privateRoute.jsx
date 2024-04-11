import { Navigate } from 'react-router-dom';

const isLogin = false;

function PrivateRoute({ children }) {
  let decisionInput = '';

  if (!isLogin) {
    return <Navigate to="/home" />;
  }

  switch (decisionInput) {
    case 'case-1':
      return <Navigate to="/case-1-page" />;
    case 'case-2':
      return <Navigate to="/case-2-page" />;
    default:
      return children;
  }
}

export default PrivateRoute;
