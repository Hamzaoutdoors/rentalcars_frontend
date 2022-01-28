import styled from 'styled-components';
import CityOption from './CityOption';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 10%;
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

const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  defaultValue: props.value || '',
  id: props.id,
}))`
  background-color: white;
  padding: 0.5rem;
  border-radius: 5px;
  color: grey;
  margin-bottom: 0.5rem;
`;

const AnnounceButton = styled.a`
  padding: 0.5rem;
  border-radius: 20px;
  width: 150px;
  background-color: #97BF11;
  text-decoration: none;
  text-align: center !important;
  justify-self: end;
  align-self: center;
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
        <h2 style={{ marginBottom: '1rem' }}>
          Car Info
        </h2>
        <Input placeholder="Model" id="car-model" />
        <Input placeholder="Brand" id="car-brand" />
        <Input placeholder="Image Url" id="car-image" />
      </InputWrapper>
      <CityInputWrapper>
        <h2 style={{ marginBottom: '1rem' }}>
          City:
        </h2>
        <CityOption />
      </CityInputWrapper>
    </FormRow>
    <FormRow>
      <InputWrapper>
        <h2 style={{ marginBottom: '1rem' }}>
          Car Details
        </h2>
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
