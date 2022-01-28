import styled from 'styled-components';
import CarForm from '../components/cars/CarForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-heigth: 100vh;
  width: 100vw;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  font-size: 24px;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const AddCar = () => (
  <Container>
    <Container>
      <Wrapper>
        <Title>
          <p style={{ padding: '0 2.5rem' }}>
            Add a Car to rent
          </p>
        </Title>
        <p style={{ fontSize: '16px', padding: '0 2.5rem' }}>
          Let&apos;s be partners, with a 2% fee you can annouce your car on our website!
          We are available in 10 cities!
        </p>
      </Wrapper>
      <CarForm />
    </Container>
  </Container>
);

export default AddCar;
