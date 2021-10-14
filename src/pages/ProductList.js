import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import EmailList from "../components/EmailList";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  return (
    <Container>
      <Navbar />
      <Title>Search Flavors</Title>
      <Products cat={cat} />
      <EmailList />
      <Footer />
    </Container>
  );
}

export default ProductList;
