import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  margin-left: 50px;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  background-color: #e1e5f2;
  width: 100%;
  height: 10%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  text-decoration: none;
`;

const Icon = styled.div`
  margin: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  text-decoration: none;
  color: #1d3557;

  :hover {
    background-color: #a8dadc;
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  color: #1d3557;
  font-size: 20px;
`;

function Product({ product }) {
  return (
    <Container>
      <Link to={`/product/${product._id}`}>
        <Image src={product.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Title>{product.title}</Title>
        </Info>
      </Link>
    </Container>
  );
}

export default Product;
