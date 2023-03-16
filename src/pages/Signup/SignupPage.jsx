import React from "react";
import { Styled } from "./Styled";
import Header from "../../components/Header/Header";

const SignupPage = () => {
  return (
    <>  
      <Header/>
      <Styled>
        <section>
          <h1>Olá, boas vindas ao
          LabEddit ;)
          </h1>
        </section>
        <section className="container-input">
          <input type="Apelido" value="" placeholder="Apelido" />
          <input type="E-mail" value="" placeholder="E-mail" />
          <input type="Senha" value="" placeholder="Senha" />
        </section>  
        <section className="container-contrato">
          <h6>
            Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e 
            nossa <a>Política de Privacidade</a>.
          </h6>
          <div className="container-checkbox">
            <input className="checkout" type="checkbox" id="check" name="check" value="agree" />
            <label htmlFor="check">Eu concordo em receber emails sobre coisas legais no Labeddit</label>
          </div>        
        <button className="btn-cadastrar">
          Cadastrar
        </button>
        </section>
      </Styled>
    </>
  );
};

export default SignupPage;
