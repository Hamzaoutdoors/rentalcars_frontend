import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  background-color: white;
  width: 70%;
  height: 100%;
  z-index: 1;
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
    </Container>
  );
};

Options.propTypes = {
  closeOptions: PropTypes.func.isRequired,
};

export default Options;
