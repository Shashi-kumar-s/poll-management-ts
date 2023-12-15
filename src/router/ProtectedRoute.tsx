import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ login,children}:any) => {
  return login ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
