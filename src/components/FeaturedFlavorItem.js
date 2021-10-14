import React from "react";
import { Link } from "react-router-dom";
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
  color: #1d3557;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #f1faee;
  border-radius: 5px;
  color: #1d3557;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background-color: #a8dadc;
    transform: scale(1.2);
  }
`;

function FeaturedFlavorItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/product/${item.title}`}>
          <Button>Start Your Box</Button>
        </Link>
        {/*will direct to Product page*/}
      </Info>
    </Container>
  );
}

export default FeaturedFlavorItem;
