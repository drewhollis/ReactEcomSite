import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

function Products({ flavor }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          flavor
            ? `http://localhost:5000/api/product?flavor=${flavor}`
            : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [flavor]);

  return (
    <Container>
      <Wrapper>
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Products;
