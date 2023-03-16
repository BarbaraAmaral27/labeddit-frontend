import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import HomePage from "../pages/Home/HomePage";
import SignupPage from "../pages/Signup/SignupPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router