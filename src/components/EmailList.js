import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e1e5f2;
`;

const Title = styled.h1`
  font-style: 70px;
  margin-bottom: 20px;
`;

const Description = styled.h2`
  font-style: 40px;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "90%" })}
`;

const Input = styled.input`
  border: 1px solid #457b9d;
  flex: 5;
  margin: 3px;
  padding-left: 20px;
`;

const Button = styled.button`
  background-color: #a8dadc;
  color: #1d3557;
  transition: all 0.5s ease;
  cursor: pointer;
  flex: 1;
  height: 40px;
  border-radius: 5px;
  border: none;

  :hover {
    background-color: #a8dadc;
    transform: scale(1.2);
  }
`;

function EmailList() {
  return (
    <Container>
      <Title>Join Jess's Newsletter</Title>
      <Description>
        Get exclusive discounts and be the first to know when new flavors are
        released!
      </Description>
      <InputContainer>
        <Input placeholder="Enter Your Name" />
        <Input placeholder="Enter Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default EmailList;
