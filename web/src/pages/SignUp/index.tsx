import * as React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Container, Content, Background } from "./styles";
import logoImg from "../../assets/logo.svg";

import Button from "../../components/Button";
import Input from "../../components/Input";

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="Gobarber" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="name" icon={FiUser} placeholder="Name" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="register">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
