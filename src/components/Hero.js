import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  background-color: rgba(29, 53, 87, 0.2);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  font-family: "Italianno";
  font-size: 120px;
  ${mobile({ fontSize: "50px", justifyContent: "center" })}
`;

function Hero() {
  return (
    <Container>
      <Image src="/images/VerticalHoldingTray.jpg"></Image>
      <Info>
        <Title>BakedByJess</Title>
      </Info>
    </Container>
  );
}

export default Hero;
