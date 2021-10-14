import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { featuredflavors } from "../SlideData";
import CategoryItem from "./FeaturedFlavorItem";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;

const TitleContainer = styled.div`
  margin-left: 20px;
`;

const Title = styled.h1`
  color: #1d3557;
`;

function FeaturedFlavors() {
  return (
    <Container>
      <TitleContainer>
        <Title>Seasonal Flavors</Title>
      </TitleContainer>
      <Wrapper>
        {featuredflavors.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default FeaturedFlavors;
