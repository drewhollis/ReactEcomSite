import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { ShoppingCartOutlined, Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.h3`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Button = styled.button`
  border: 1px solid #1d3557;
  padding: 10px;
  background-color: #f1faee;
  border-radius: 5px;
  color: #1d3557;
  cursor: pointer;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;

  :hover {
    background-color: #a8dadc;
    transform: scale(1.2);
  }
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #1d3557;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/product/find/" + id);
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>
              <ShoppingCartOutlined /> Add To Cart
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}

export default Product;
