import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { setActiveDashLink } from '../../../redux/utils/actions/navActions';
import store from '../../../redux/configureStore';

const LinkElem = styled.p`
  font-size: 16px;
  font-family: 'Urbanist', 'Roboto', cursive;
  font-weight: ${(props) => props.weight || '500'};
  padding: 0.5rem 0 0.2rem 2.5rem;
  margin: 0;
  color: inherit;
`;

const ActiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const dispatchAction = (action, payload) => {
  store.dispatch(action(payload));
};

const NestedLink = (props) => {
  const { activeDashboardLink } = useSelector((state) => state.utils.navBar);
  const {
    text,
  } = props;

  if (activeDashboardLink === text) {
    return (
      <ActiveWrapper>
        <LinkElem color="white" weight="700" onClick={() => dispatchAction(setActiveDashLink, text)}>
          {text}
        </LinkElem>
      </ActiveWrapper>
    );
  }

  return (
    <LinkElem onClick={() => dispatchAction(setActiveDashLink, text)}>
      {text}
    </LinkElem>
  );
};

NestedLink.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NestedLink;
