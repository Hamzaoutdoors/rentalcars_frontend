import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { setActiveLink } from '../../../redux/utils/actions/navActions';
import store from '../../../redux/configureStore';

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
    path, text,
  } = props;
  const location = useLocation();

  if (path === location.pathname) dispatchAction(setActiveLink, path);

  if (activeLink === path) {
    return (
      <ActiveWrapper>
        <LinkElem to={path} color="white" onClick={() => dispatchAction(setActiveLink, path)}>
          {text}
        </LinkElem>
      </ActiveWrapper>
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
};

export default LinkActive;
