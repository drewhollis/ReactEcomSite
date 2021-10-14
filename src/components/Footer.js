import { Email, Facebook, Instagram } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #edf6f9;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.h3`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  margin: 10px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;

  :hover {
    background-color: #a8dadc;
    transform: scale(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const Payment = styled.img`
  width: 100%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>BakedByJess</Logo>
        <Desc>Follow Jess's creations on Instagram and Facebook!</Desc>
        <SocialContainer>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Helpful Links</Title>
        <List>
          <ListItem>Flavors</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          questions@bakedbyjess.com
        </ContactItem>
        <Payment src="https://cdn.shopify.com/s/files/1/2920/9992/files/Secure_Payment_Logo_large.jpg?v=1538953232" />
      </Right>
    </Container>
  );
}

export default Footer;
