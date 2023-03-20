import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Styled } from "./styledHeaderPost";
import { goToLoginPage } from "../../routes/coordinator";
import logoSmall from "../../assets/logoSmall.png";
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
          <img src={logoSmall} alt="logo" />
          <a onClick={() => {
            logout();
          setPage("");
          }}>Logout</a>
        </section>
      </Styled>
    </>
  );
};

export default Header;
