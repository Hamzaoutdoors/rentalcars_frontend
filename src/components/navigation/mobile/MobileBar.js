import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Options from './Options';
import store from '../../../redux/configureStore';
import { toggleMobileModal } from '../../../redux/utils/actions/navActions';

const Container = styled.div`
  position: absolute;
  color: black;
  top: 2rem;
  left: 1rem;
  z-index: 10;
`;

const toggleModal = (payload) => {
  store.dispatch(toggleMobileModal(payload));
};

const MobileBar = () => {
  const { expandMobile } = useSelector((state) => state.utils.navBar);

  if (expandMobile) {
    return (
      <Options closeOptions={toggleModal} />
    );
  }

  return (
    <Container>
      <MenuOutlinedIcon sx={{ fontSize: 32 }} onClick={() => toggleModal(!expandMobile)} />
    </Container>
  );
};

export default MobileBar;
