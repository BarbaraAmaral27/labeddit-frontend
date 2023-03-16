import React from "react";
import { useNavigate } from "react-router-dom";
import { Styled } from "./Styled";
import { goToHomePage } from "../../routes/coordinator";
import logoSmall from "../../assets/logoSmall.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Styled>
        <section className="container-logo">
          <img src={logoSmall} alt="logo" />
          <a onClick={() => goToHomePage(navigate)}>Entrar</a>
        </section>
      </Styled>
    </>
  );
};

export default Header;
