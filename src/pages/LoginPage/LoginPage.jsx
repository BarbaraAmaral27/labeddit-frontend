import React from 'react'
import logo from "../../assets/logo.png"
import { Styled } from './LoginPageStyled'

const LoginPage = () => {
  return (
    <>
      <Styled>
        <section className="container-logo">
          <img src={logo} alt="logo"/>
          <h1>LabEddit</h1>
          <h5>O projeto de rede social da Labenu</h5>
        </section>
        <section className="container-input">
          <input type="email" value="" placeholder="E-mail"/>
          <input type="password" value="" placeholder="Senha"/>
        </section>
        <section className="container-button">
          <button className="btn-continuar" onClick={""}>Continuar</button>
          <hr/>
          <button className="btn-cadastrar" onClick={""}>Crie uma conta!</button>
        </section>
      </Styled>    
    </>
  )
}

export default LoginPage