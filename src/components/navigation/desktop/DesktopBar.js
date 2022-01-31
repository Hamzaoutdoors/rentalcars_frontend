import { NavLink, useLocation } from 'react-router-dom';
import {
  Facebook, Instagram, Pinterest, Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import LinkActive from '../links/LinkActive';
import store from '../../../redux/configureStore';
import { setActiveLink } from '../../../redux/utils/actions/navActions';

const paths = [
  '/',
  '/cars/new',
  '/myreservations',
  '/lifestyle',
  '/dashboard',
];

const linksText = [
  'Reserve a Car',
  'Announce a Car',
  'My Reservations',
  'Lifestyle',
  'Dashboard',
];

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

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0 1rem 1rem;
  width: 100%;
  margin: 0px;
  margin-bottom: auto;
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: '20px 5px';
    margin-bottom: 1rem;
    text-align: center;
`;

const SocialIcon = styled.div`
   width: 25px;
   height: 25px;
   border-radius: 50%;
   color: #fff;
   background-color : #${(props) => props.color};
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 20px;
`;

const Signature = styled.span`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const activeLink = (payload) => {
  store.dispatch(setActiveLink(payload));
};

const DesktopBar = () => {
  const location = useLocation();

  useEffect(() => {
    if (paths.includes(location.pathname)) {
      activeLink(location.pathname);
    } else {
      activeLink('/');
    }
  }, []);

  return (
    <Container>
      <Logo to="/">
        <LogoImage src="https://i.ibb.co/vxkd1PT/LOGO.png" />
      </Logo>
      <Nav className="sidebar-content">
        { paths.map((path, index) => (
          <LinkActive
            key={uuidv4()}
            path={path}
            text={linksText[index]}
          />
        ))}
      </Nav>
      <Footer>
        <SocialContainer className="sidebar-btn-wrapper">
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
        <Signature>
          2022 © MIT license
        </Signature>
      </Footer>
    </Container>
  );
};

export default DesktopBar;
