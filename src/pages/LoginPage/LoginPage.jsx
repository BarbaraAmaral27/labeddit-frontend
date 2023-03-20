import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Styled } from "./LoginPageStyled";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  goToHomePage,
  goToPostsPage,
  goToSignupPage,
} from "../../routes/coordinator";

const LoginPage = () => {
  const { context, page, setPage } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onchangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");
    if (token) {
      goToPostsPage(navigate);
    }
  }, []);

  const login = async () => {
    try {
      const body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/login`, body);

      window.localStorage.setItem("labeddit-token", response.data.token);
      const token = window.localStorage.getItem("labeddit-token");

      if (response.data.token === undefined) {
        window.localStorage.removeItem("labeddit-token");
        goToHomePage(navigate);
      }

      context.setIsAuth(true);

      goToPostsPage(navigate, token);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
      window.localStorage.removeItem("labeddit-token");
    }
  };

  return (
    <>
      <Styled>
        <section className="container-logo">
          <img src={logo} alt="logo" />
          <h1>LabEddit</h1>
          <h5>O projeto de rede social da Labenu</h5>
        </section>
        <section className="container-input">
          <input
            type="email"
            value={form.email}
            placeholder="E-mail"
            name="email"
            onChange={onchangeForm}
            autoComplete="off"
          />
          <input
            type="password"
            value={form.password}
            placeholder="Senha"
            name="password"
            onChange={onchangeForm}
            autoComplete="off"
          />
        </section>
        <section className="container-button">
          <button className="btn-continuar" onClick={login}>
            Continuar
          </button>
          <hr />
          <button
            className="btn-cadastrar"
            onClick={() => {
              goToSignupPage(navigate);
              setPage("signupPage");
            }}
          >
            Crie uma conta!
          </button>
        </section>
      </Styled>
    </>
  );
};

export default LoginPage;
