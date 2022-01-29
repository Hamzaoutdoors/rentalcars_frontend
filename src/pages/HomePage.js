import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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
  background-image: url('https://media.giphy.com/media/YC4SNe6t0Sbg8hH3Gt/giphy.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
`;

const Button = styled(NavLink)`
padding: 0.5rem;
border-radius: 15px;
width: 250px;
font-size: 1.2em;
background-color: #97BF11 !important;
text-decoration: none !important;
text-align: center !important;
color: white !important;
cursor: pointer;
border: 2px solid #f6a40e;
text-transform: uppercase;
transition: all 0.5s ease-in-out;
transform: translateY(120px);
&:hover {
  color: white !important;
  background-color: #9fcf01 !important;
} 
 `;

const HomePage = () => (
  <Container>
    <Button to="/cars">
      Start your journey
    </Button>
  </Container>
);

export default HomePage;
