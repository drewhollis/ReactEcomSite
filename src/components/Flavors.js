import React from "react";
import styled from "styled-components";
import { flavors } from "../SlideData";
import FlavorItem from "./FlavorItem";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Flavors() {
  return (
    <Container>
      {flavors.map((item) => (
        <FlavorItem item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Flavors;
