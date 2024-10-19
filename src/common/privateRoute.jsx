import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const user = useSelector((state) => state.user)

  if (!user.isLogin) {
   return <Navigate to="/home" />
  }
  return children
}

export default PrivateRoute;
