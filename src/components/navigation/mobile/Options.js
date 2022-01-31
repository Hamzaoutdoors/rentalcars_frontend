import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import NavLinks from '../links/NavLinks';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 4rem;
  width: 70%;
  max-width: 250px;
  min-height: 100vh;
  height: 100%;
  z-index: 3;
  top: 0;
  left: 0;
`;

const HamMenu = styled.div`
  position: absolute;
  color: black;
  top: 2rem;
  left: 1rem;
`;

const Options = (props) => {
  const { closeOptions } = props;

  return (
    <Container>
      <HamMenu>
        <MenuOutlinedIcon sx={{ fontSize: 32 }} onClick={() => closeOptions(false)} />
      </HamMenu>
      <NavLinks />
      <Footer />
    </Container>
  );
};

Options.propTypes = {
  closeOptions: PropTypes.func.isRequired,
};

export default Options;
