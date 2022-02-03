import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '@mui/icons-material';
import { useEffect } from 'react';
import LinkActive from './LinkActive';
import { logOutUser } from '../../../redux/auth/authSlice';
import { setActiveLink } from '../../../redux/utils/actions/navActions';
import store from '../../../redux/configureStore';

const loggedLinks = {
  '/cars': 'Reserve a Car',
  '/cars/new': 'Announce a Car',
  '/myreservations': 'My Reservations',
  '/lifestyle': 'LifeStyle',
};

const unLoggedLinks = {
  '/cars': 'Reserve a Car',
  '/lifestyle': 'LifeStyle',
};

const loggedLinksKeys = Object.keys(loggedLinks);

const unLoggedLinksKeys = Object.keys(unLoggedLinks);

const loggedLinksMappable = Object.entries(loggedLinks);

const unloggedLinksMappable = Object.entries(unLoggedLinks);

const Container = styled.div`
  width: 100%;
  margin-bottom: auto;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0 1rem 1rem;
  width: 100%;
  margin: 0px;
`;

const LogOut = styled.div`
  display: flex;
  position: absolute;
  bottom: 100px;
  left: 20px;
  justify-content: space-between;
  width: 150px;
  padding: 0.6rem 1rem;
  background-color: #C70000;
  color: white;
  border-radius: 25px;
  text-decoration: none;
  &:hover {
    color: #c70000;
    background-color: white;
    border: 1px solid #c70000;
  }
`;

const handleActiveLink = (path) => {
  store.dispatch(setActiveLink(path));
};

const NavLinks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (loggedLinksKeys.includes(location.pathname)
    || unLoggedLinksKeys.includes(location.pathname)) {
      handleActiveLink(location.pathname);
    } else {
      handleActiveLink('/cars');
    }
  }, []);

  return (
    <Container>
      <Nav className="sidebar-content">
        { isAuthenticated
          ? loggedLinksMappable.map((link) => {
            let nestedLinks = [];
            let propText = link[1];
            if (typeof link[1] === 'object') {
              nestedLinks = link[1].slice(1);
              [propText] = link[1].slice(0, 1);
            }
            return (
              <LinkActive
                key={uuidv4()}
                path={link[0]}
                nestedLinks={nestedLinks}
                text={propText}
              />
            );
          })
          : unloggedLinksMappable.map((link) => {
            const nestedLinks = [];
            const propText = link[1];
            return (
              <LinkActive
                key={uuidv4()}
                path={link[0]}
                nestedLinks={nestedLinks}
                text={propText}
              />
            );
          })}
      </Nav>
      {
        isAuthenticated && (
        <LogOut onClick={() => {
          dispatch(logOutUser());
          navigate('/login', { replace: true });
          document.location.reload(true);
        }}
        >
          Log out
          <Logout />
        </LogOut>
        )
      }
    </Container>
  );
};

export default NavLinks;
