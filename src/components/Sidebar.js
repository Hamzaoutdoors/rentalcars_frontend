/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem, CDBSidebarContent, CDBSidebarMenu, CDBSidebarFooter,
} from 'cdbreact';
import {
  Facebook, Instagram, Pinterest, Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';
import { desktop, mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll-initial;
  border-right: 1px solid #e6e6e6;
  color: black;
  align-items: center;
`;

const Logo = styled(NavLink)`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  text-decoration: none !important;
  ${mobile({
    display: 'none',
  })};
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  color: black;
  background-color: white;
    ${mobile({
    width: '10px !important',
  })};
`;

const Header = styled(CDBSidebarHeader)`
    ${desktop({
    display: 'none',
  })};
`;

const Content = styled.div`
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-between;
`;

const LinkElem = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  font-weight: bold;
`;

const SidebarItem = styled(CDBSidebarMenuItem)`
  color: black;
  text-decoration: none;
  margin-left: 30px;
  text-transform: uppercase;
  &.activeClicked {
    background-color: #f5f5f5;
}
`;

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: '20px 5px';
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

const Sidebar = () => (
  <Container>
    <Logo to="/">
      <LogoImage src="https://i.ibb.co/vxkd1PT/LOGO.png" />
    </Logo>
    <Wrapper as={CDBSidebar}>
      <Header prefix={<i className="fa fa-bars fa-large fs-3" />} />
      <Content as={CDBSidebarContent} className="sidebar-content">
        <CDBSidebarMenu>
          <LinkElem
            exact
            to="/cars"
          >
            <SidebarItem icon="columns" ac>
              Models
            </SidebarItem>
          </LinkElem>
          <LinkElem exact to="/lifestyle" activeClassName="activeClicked">
            <SidebarItem icon="table">
              LIFESTYLE
            </SidebarItem>
          </LinkElem>
          <LinkElem exact to="/" activeClassName="activeClicked">
            <SidebarItem icon="shopping-cart">
              shop
            </SidebarItem>
          </LinkElem>
          <LinkElem exact to="/dashboard" activeClassName="activeClicked">
            <SidebarItem icon="car">
              test drive
            </SidebarItem>
          </LinkElem>
        </CDBSidebarMenu>
      </Content>
      <CDBSidebarFooter style={{ textAlign: 'center' }}>
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
          2022 © All rights reserved
        </Signature>
      </CDBSidebarFooter>
    </Wrapper>
  </Container>
);

export default Sidebar;
