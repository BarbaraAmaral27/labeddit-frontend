import React, { useContext, useEffect, useState } from "react";
import { Styled } from "./SignupPageStyled";
import HeaderSignup from "../../components/HeaderSignup/HeaderSignup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToPostsPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";

const SignupPage = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (context.context.isAuth) {
      goToPostsPage(navigate);
    }
  }, []);

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.name });
  };

  const signup = async () => {
    try {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/users/signup`, body);

      window.localStorage.setItem("labeddit-token", response.data.token);

      context.context.setIsAutgh(true);

      goToPostsPage(navigate);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  return (
    <>
      <HeaderSignup />
      <Styled>
        <section>
          <h1>Olá, boas vindas ao LabEddit ;)</h1>
        </section>
        <section className="container-input">
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Nome"
            onChange={onChangeForm}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="E-mail"
            onChange={onChangeForm}
          />
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Senha"
            onChange={onChangeForm}
          />
        </section>
        <section className="container-contrato">
          <h6>
            Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e
            nossa <a>Política de Privacidade</a>.
          </h6>
          <div className="container-checkbox">
            <input
              className="checkout"
              type="checkbox"
              id="check"
              name="check"
            />
            <label htmlFor="check">
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </label>
          </div>
          <button className="btn-cadastrar" onClick={signup}>
            Cadastrar
          </button>
        </section>
      </Styled>
    </>
  );
};

export default SignupPage;
