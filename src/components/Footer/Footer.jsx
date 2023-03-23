import React from "react";
import { Styled } from "./FooterStyled";
import gitHub from "../../assets/gitHub.svg"
import linkedin from "../../assets/linkedin.svg"

const Footer = () => {

  return (
    <>
      <Styled>
      <div className="redes">
        <h4>Bárbara Amaral / 2023</h4>
        <a href="https://github.com/BarbaraAmaral27" target={"_blank"}>
          <img src={gitHub} alt="icone gitHub" rel="noopener noreferrer" />
        </a>
        <a href="https://www.linkedin.com/in/barbaramamaral/" target={"_blank"}>
          <img src={linkedin} alt="icone linkedin" rel="noopener noreferrer" />
        </a>
      </div>
    </Styled>
    </>
  );
};

export default Footer;
