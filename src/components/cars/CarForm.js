import styled from 'styled-components';
import CityOption from './CityOption';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0rem 2rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const CityInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
`;

const InputLabel = styled.div`
  font-family: 'Bebas Neue', 'Arial', cursive;
  font-size: 22px;
  font-weight: 400;
  color: black;
  margin-bottom: 1rem;
`;

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  defaultValue: props.value || '',
  id: props.id,
}))`
  background-color: white;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: grey;
  box-shadow: 0px 3px 7px -2px rgba(79,79,79,0.64);
`;

const AnnounceButton = styled.a`
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  width: 150px;
  background-color: #97BF11;
  text-decoration: none;
  text-align: center !important;
  justify-self: end;
  align-self: center;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: grey;
  color: white !important;
  margin-bottom: 1rem;
  margin-top: auto;
  &:hover {
    color: white !important;
    cursor: pointer;
  } 
`;

const CarForm = () => (
  <Container>
    <FormRow>
      <InputWrapper>
        <InputLabel>
          Car Info
        </InputLabel>
        <Input placeholder="Model" id="car-model" />
        <Input placeholder="Brand" id="car-brand" />
        <Input placeholder="Image Url" id="car-image" />
      </InputWrapper>
      <CityInputWrapper>
        <InputLabel>
          City
        </InputLabel>
        <CityOption />
      </CityInputWrapper>
    </FormRow>
    <FormRow>
      <InputWrapper>
        <InputLabel>
          Car Details
        </InputLabel>
        <Input placeholder="Price Daily" id="price-daily" />
        <Input placeholder="Price Monthly" id="price-monthly" />
        <Input placeholder="Main color (hex value)" id="car-color" />
      </InputWrapper>
      <InputWrapper>
        <AnnounceButton onClick={() => console.log('I was clicked')}>
          Announce
        </AnnounceButton>
      </InputWrapper>
    </FormRow>
  </Container>
);

export default CarForm;
