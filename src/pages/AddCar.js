import styled from 'styled-components';
import CarForm from '../components/cars/CarForm';
import { mobile, tablet } from '../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  max-width: 1320px;
  min-heigth: 100vh;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-size: 36px;
  font-weight: 600;
  font-family: 'Urbanist', 'Arial', cursive !important;
  color: black;
  ${mobile({
    'font-size': '26px',
  })};
  ${tablet({
    'font-size': '32px',
  })};
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 0 2.5rem;
  font-family: 'Urbanist', 'Arial', cursive !important;
  color: gray;
  ${mobile({
    'font-size': '12px',
  })};
  ${tablet({
    'font-size': '14px',
  })};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const AddCar = () => (
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
);

export default AddCar;
