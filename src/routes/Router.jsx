import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import SignupPage from "../pages/SignupPage/SignupPage";
import PostPage from "../pages/PostPage/PostPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>} />
                <Route path="/post" element={<PostPage/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router