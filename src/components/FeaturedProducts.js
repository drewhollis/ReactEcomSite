import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FeaturedProduct from "./FeaturedProduct";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const TitleContainer = styled.div`
  margin-left: 20px;
`;

const BottomTitleContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h1`
  color: #1d3557;
  text-decoration: none;
`;

function FeaturedProducts({ flavor }) {
  const [featuredproducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const res = await axios.get(
          flavor
            ? `http://localhost:5000/api/featuredproduct?flavor=${flavor}`
            : "http://localhost:5000/api/featuredproduct"
        );
        setFeaturedProducts(res.data);
      } catch (err) {}
    };
    getFeaturedProducts();
  }, [flavor]);

  return (
    <Container>
      <TitleContainer>
        <Title>Get 'Em By The Dozen</Title>
      </TitleContainer>
      <Wrapper>
        {featuredproducts.map((item) => (
          <FeaturedProduct item={item} key={item._id} />
        ))}
      </Wrapper>
      <BottomTitleContainer>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <Title>Shop All Dozens</Title>
        </Link>
      </BottomTitleContainer>
    </Container>
  );
}

export default FeaturedProducts;
