// src/components/PrivateRoute.jsx
import { useUser } from "../hooks/useUser";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();
  console.log("Usuario en PrivateRoute:", user);
  if (!user) return <p>No autorizado. Por favor logueate.</p>;
  return children;
};


export default PrivateRoute;
