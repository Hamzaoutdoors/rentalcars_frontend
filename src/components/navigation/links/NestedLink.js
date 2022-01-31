import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { setActiveDashLink } from '../../../redux/utils/actions/navActions';
import store from '../../../redux/configureStore';

const Border = styled.span`
  height: 2px;
  padding: 0 2.5rem;
  background-color: black;
  margin-left: 2.5rem;
`;

const LinkElem = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 2.5rem;
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
        <LinkElem color="white" onClick={() => dispatchAction(setActiveDashLink, text)}>
          {text}
        </LinkElem>
        <Border />
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
