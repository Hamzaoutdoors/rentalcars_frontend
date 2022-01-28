import styled from 'styled-components';
import CarForm from '../components/cars/CarForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  min-heigth: 100vh;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Bebas Neue', 'Arial', cursive !important;
  color: black;
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 0 2.5rem;
  font-family: 'Bebas Neue', 'Arial', cursive !important;
  color: black;
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
          <p style={{ padding: '0 2.5rem', margin: 0 }}>
            Add a Car to rent
          </p>
        </Title>
        <SubTitle>
          Let&apos;s be partners, with a 2% fee you can annouce your car on our website!
          We are available in 10 cities!
        </SubTitle>
      </Wrapper>
      <CarForm />
    </Container>
  </Container>
);

export default AddCar;
