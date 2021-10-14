import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  color: white;
  ${mobile({ height: "50px", width: "100vw" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex; /*aligns divs horizontally*/
  justify-content: space-between; /*creates even space between divs*/
  align-items: center;
  background-color: #1d3557;
  ${mobile({ padding: "10px 0px" })}
`;

const NavbarLeft = styled.div`
  flex: 1; /*defines horizontal size of div. makes all 3 even.*/
  display: flex;
  justify-content: flex-start;
`;

const NavbarCenter = styled.div`
  flex: 1; /*defines horizontal size of div. makes all 3 even.*/
  text-align: center;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: "Italianno";
  color: white;
  ${mobile({ fontSize: "20px", justifyContent: "center" })}
`;

const NavbarRight = styled.div`
  flex: 1; /*defines horizontal size of div. makes all 3 even.*/
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  ${mobile({ fontSize: "8px", marginLeft: "5px", marginTop: "5px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <NavbarLeft>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Sign In</MenuItem>
        </NavbarLeft>
        <NavbarCenter>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>BakedByJess</Logo>
          </Link>
        </NavbarCenter>
        <NavbarRight>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <MenuItem>All Flavors</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </NavbarRight>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
