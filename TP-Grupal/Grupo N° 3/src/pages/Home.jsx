import { Route, Routes } from "react-router-dom";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import AuthLayout from "../layout/AuthLayout.jsx";

function Home() {
return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/login" element={ <AuthLayout><Login /></AuthLayout> } />
        <Route path="/register" element={ <AuthLayout><Register /></AuthLayout> } />
    </Routes>
    <Footer />
    </>
);
}
export default Home;
