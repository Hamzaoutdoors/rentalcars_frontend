import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setActiveLink } from '../../../redux/utils/actions/navActions';
import store from '../../../redux/configureStore';
import NestedLink from './NestedLink';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LinkElem = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: ${(props) => props.color || 'black'};
  }
`;

const ActiveWrapper = styled.div`
  background-color: #ED7730;
  padding: 0.5rem 0rem 0.5rem 0rem;
  width: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;
`;

const dispatchAction = (action, payload) => {
  store.dispatch(action(payload));
};

const LinkActive = (props) => {
  const { activeLink } = useSelector((state) => state.utils.navBar);
  const {
    path, text, nestedLinks,
  } = props;

  if (activeLink === path) {
    return (
      <Container>
        <ActiveWrapper>
          <LinkElem to={path} color="white" onClick={() => dispatchAction(setActiveLink, path)}>
            {text}
          </LinkElem>

        </ActiveWrapper>
        { nestedLinks && nestedLinks.map((text) => (
          <NestedLink key={uuidv4()} text={text} />
        ))}
      </Container>
    );
  }

  return (
    <LinkElem to={path} onClick={() => dispatchAction(setActiveLink, path)}>
      {text}
    </LinkElem>
  );
};

LinkActive.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  nestedLinks: PropTypes.instanceOf(Array).isRequired,
};

export default LinkActive;
