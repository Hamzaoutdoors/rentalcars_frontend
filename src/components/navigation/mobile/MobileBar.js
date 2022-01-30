import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import styled from 'styled-components';
import Options from './Options';

const Container = styled.div`
  position: absolute;
  color: black;
  top: 2rem;
  left: 1rem;
  z-index: 1;
`;

const MobileBar = () => {
  const [options, setOptions] = useState(false);

  if (options) {
    return (
      <Options closeOptions={setOptions} />
    );
  }

  return (
    <Container>
      <MenuOutlinedIcon sx={{ fontSize: 32 }} onClick={() => setOptions(!options)} />
    </Container>
  );
};

export default MobileBar;
