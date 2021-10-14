import React from "react";
import styled from "styled-components";
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
  width: 40%;
  background-color: #f1faee;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  width: 40%;
  background-color: #1d3557;
  border-radius: 5px;
  color: #f1faee;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    transform: scale(1.2);
  }
`;

function SignUp() {
  return (
    <Container>
      <Wrapper>
        <Title>Create Your Account</Title>
        <Form>
          <Input placeholder="first name"></Input>
          <Input placeholder="last name"></Input>
          <Input placeholder="email"></Input>
          <Input placeholder="username"></Input>
          <Input placeholder="password"></Input>
          <Input placeholder="confirm password"></Input>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordane with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Sign Up</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default SignUp;
