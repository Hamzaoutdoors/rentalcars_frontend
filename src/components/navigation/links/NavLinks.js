import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setActiveLink } from '../../../redux/utils/actions/navActions';
import store from '../../../redux/configureStore';
import LinkActive from './LinkActive';

const paths = [
  '/',
  '/cars/new',
  '/myreservations',
  '/lifestyle',
  '/dashboard',
  '/logout',
];

const linksText = [
  'Reserve a Car',
  'Announce a Car',
  'My Reservations',
  'Lifestyle',
  ['Dashboard', 'Cars', 'Reservations'],
  'Log out',
];

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

const activeLink = (payload) => {
  store.dispatch(setActiveLink(payload));
};

const NavLinks = () => {
  const location = useLocation();

  useEffect(() => {
    if (paths.includes(location.pathname)) {
      activeLink(location.pathname);
    } else {
      activeLink('/');
    }
  }, []);
  return (
    <Container>
      <Nav className="sidebar-content">
        { linksText.map((text, index) => {
          let nestedLinks = [];
          let propText = text;
          if (typeof text === 'object') {
            nestedLinks = text.slice(1);
            [propText] = text;
          }

          return (
            <LinkActive
              key={uuidv4()}
              path={paths[index]}
              nestedLinks={nestedLinks}
              text={propText}
            />
          );
        })}
      </Nav>
    </Container>
  );
};

export default NavLinks;
