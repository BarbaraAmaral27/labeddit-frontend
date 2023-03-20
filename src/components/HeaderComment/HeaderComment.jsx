import React from "react";
import { useNavigate } from "react-router-dom";
import { Styled } from "./HeaderCommentStyled";
import { goToHomePage, goToPostsPage } from "../../routes/coordinator";
import logoSmall from "../../assets/logoSmall.png";
import x from "../../assets/x.svg";

const Header = () => {
  const navigate = useNavigate();
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
          <a onClick={() => goToHomePage(navigate)}>Logout</a>
        </section>
      </Styled>
    </>
  );
};

export default Header;
