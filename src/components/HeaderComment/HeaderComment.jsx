import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Styled } from "./HeaderCommentStyled";
import { goToLoginPage, goToPostsPage } from "../../routes/coordinator";
import logoSmall from "../../assets/logoSmall.png";
import x from "../../assets/x.svg";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const { context, page, setPage } = useContext(GlobalContext);
  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("labeddit-token");
    context.setIsAuth(false);
    goToLoginPage(navigate)
  }

  return (
    <>
      <Styled>
        <section className="container-logo">
          <img className="close"
            src={x}
            alt="close"
            onClick={() => {
              goToPostsPage(navigate);
            }}
          />
          <img className="logo" src={logoSmall} alt="logo" />
          <a onClick={() => { 
            logout()}}>Logout</a>
        </section>
      </Styled>
    </>
  );
};

export default Header;
