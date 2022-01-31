import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import NavLinks from '../links/NavLinks';

const Container = styled.div`
  display: flex;
  border: 0;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Bebas Neue', 'Arial', cursive;
  border-right: 1px solid #e6e6e6;
  color: black;
  align-items: center;
`;

const Logo = styled(NavLink)`
  height: 200px;
  width: 200px;
  padding: 1rem;
  margin-bottom: 10px;
  text-decoration: none !important;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const DesktopBar = () => (
  <Container>
    <Logo to="/">
      <LogoImage src="https://i.ibb.co/vxkd1PT/LOGO.png" />
    </Logo>
    <NavLinks />
    <Footer />
  </Container>
);

export default DesktopBar;
