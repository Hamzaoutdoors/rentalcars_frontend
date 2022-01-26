import React from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider';
// import Categories from '../components/Categories';
// import Products from '../components/Products';
// import Newsletter from '../components/Newsletter';
// import Footer from '../components/Footer';
// import { desktop, mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: black;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 2.2em;
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 0.8em;
  text-align: center;
  letter-spacing: 1px;
  padding-bottom: 20px;
  font-weight: bold;
  color: gray;
  border-bottom: 2px dotted #D3D3D3;

`;

const HomePage = () => (
  <Container>
    <Title> LATEST MODELS</Title>
    <SubTitle>Please select your car</SubTitle>
    <Slider />
  </Container>
);

export default HomePage;
