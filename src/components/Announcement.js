import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #f6a40e;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8em;
    font-weight: 500;
`;

const Announcement = () => (
  <Container>
    Super Deal! One extra day after a Week of Rent.
    {' '}
  </Container>
);

export default Announcement;
