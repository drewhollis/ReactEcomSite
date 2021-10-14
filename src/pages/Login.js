import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/images/VerticalHoldingTray.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #f1faee;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  width: 40%;
  justify-content: center;
  align-items: center;
  background-color: #1d3557;
  border-radius: 5px;
  color: #f1faee;
  cursor: pointer;
  transition: all 0.5s ease;

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }

  :hover {
    transform: scale(1.2);
  }
`;

const Error = styled.span`
  color: red;
`;

const Link = styled.a`
  margin-top: 10px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In To Your Account</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button onClick={handleLogin} disabled={isFetching}>
            Sign In
          </Button>
          {error && <Error>Username or Password Not Found...</Error>}
          <Link>Forgot Password?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
