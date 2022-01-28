import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background-image: url("https://i.ibb.co/H7p4vLV/Car-Showroom-Promotion-Facebook-Post-2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 20px;
    ${mobile({
    minHeight: '100vh',
  })};
`;

const ImageContainer = styled.div`
    height: 80vh;
    width: 50vw;
    display: flex;
    flex: 1;
    justify-self: right;
    align-self: center;
    transition: all 0.5s ease;
    position: absolute;
    margin: -50px -30px 0 0;
    background-color: rgba(0, 0, 0, 0.2);
    background-image: url("https://i.ibb.co/j5Hys60/lifestyle.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;

    ${mobile({
    width: '80%',
    height: '80%',
    transform: 'translate(-10px, 30px)',
    backgroundImage: 'url("https://i.ibb.co/hBLvjmq/lifestyle-mobile.png")',
  })};
`;

const LifeStyle = () => (
  <Container>
    <ImageContainer />
  </Container>
);

export default LifeStyle;
