import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 100%;
    width: 100%;
    overflow-x: hidden;
    background-image: url("https://i.ibb.co/H7p4vLV/Car-Showroom-Promotion-Facebook-Post-2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 20px;
    ${mobile({
    minHeight: '100vh',
    width: '80%',
  })};
`;

const ImageContainer = styled.div`
    height: 600px;
    width: 600px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    position: absolute;
    margin: -50px -30px 0 0;
    ${mobile({
    width: '100%',
    height: '100%',
  })};
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    ${mobile({
    transform: 'scale(0.8)',
    objectFit: 'contain',
  })};
`;

const LifeStyle = () => (
  <Container>
    <ImageContainer>
      <Image src="https://i.ibb.co/LPvxHkj/lifestyle.png" />
    </ImageContainer>
  </Container>
);

export default LifeStyle;
