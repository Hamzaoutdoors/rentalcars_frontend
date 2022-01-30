import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const LinkActive = (props) => {
  const {
    path, text, active, setActive,
  } = props;
  const location = useLocation();

  if (!active && path === location.pathname) setActive(path);

  if (active === path) {
    return (
      <ActiveWrapper>
        <LinkElem to={path} color="white" onClick={() => setActive(path)}>
          {text}
        </LinkElem>
      </ActiveWrapper>
    );
  }

  return (
    <LinkElem to={path} onClick={() => setActive(path)}>
      {text}
    </LinkElem>
  );
};

LinkActive.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default LinkActive;
