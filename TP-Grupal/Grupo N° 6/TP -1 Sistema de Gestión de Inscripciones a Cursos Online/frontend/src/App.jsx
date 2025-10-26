import { usePageStore } from "./store/usePageStore";
import AuthLayout from "./Layouts/AuthLayout";
import Home from "./Pages/HomePage";
import AdminHome from "./Pages/AdminHomePage";
import StudentHome from "./Pages/StudentHomePage";
import "./App.css";

const App = () => {
  const { page } = usePageStore();

  return (
    <>
      {page === "auth" && <AuthLayout />}
      {page === "home" && <Home />}
      {page === "admin" && <AdminHome />}
      {page === "student" && <StudentHome />}
    </>
  );
};

export default App;
