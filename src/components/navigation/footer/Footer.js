import {
  Facebook, Instagram, Pinterest, Twitter,
} from '@material-ui/icons';
import styled from 'styled-components';

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

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Footer = () => (
  <>
    <Container>
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
    </Container>
  </>
);

export default Footer;
