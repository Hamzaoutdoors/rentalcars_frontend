import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { addCar } from '../../redux/cars/carsSlice';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  ${mobile({
    'flex-direction': 'column',
  })};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1rem;
`;

const InputLabel = styled.div`
  font-family: 'Urbanist', 'Arial', cursive;
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-family: 'Urbanist', 'Arial', cursive;
  font-size: 16px;
  font-weight: 500;
  color: black;
  margin: 1rem;
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

const AnnounceButton = styled.button`
  justify-self: end;
  align-self: center;
  width: 150px;
  background-color: #97BF11;
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  border: none;
  margin-bottom: 1rem;
  margin-top: auto;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center !important;
  color: grey;
  color: white !important;
  &:hover {
    color: white !important;
    background-color: #97BF11;
    cursor: pointer;
  } 
`;

const CarForm = () => {
  const dispatch = useDispatch();
  const submitCar = (event) => {
    event.preventDefault();
    dispatch(addCar(event.target));
  };

  return (
    <Container onSubmit={(e) => submitCar(e)}>
      <FormRow>
        <InputWrapper>
          <InputLabel>
            Car Info
          </InputLabel>
          <Input type="text" name="name" placeholder="Model" id="car-model" />
          <Input type="text" name="brand" placeholder="Brand" id="car-brand" />
          <Input type="text" name="imgUrl" placeholder="Image Url" id="car-image" />
        </InputWrapper>
      </FormRow>
      <FormRow>
        <InputWrapper>
          <InputLabel>
            Car Details
          </InputLabel>
          <Input type="number" step="0.01" name="price_daily" placeholder="Price Daily" id="price-daily" />
          <Input type="number" step="0.01" name="price_monthly" placeholder="Price Monthly" id="price-monthly" />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Label>
              Color:
            </Label>
            <Input
              type="color"
              name="color"
              placeholder="Main color (hex value)"
              id="car-color"
              style={{ width: '100px', height: '35px' }}
            />
          </div>
        </InputWrapper>
        <InputWrapper>
          <AnnounceButton type="submit">
            Announce
          </AnnounceButton>
        </InputWrapper>
      </FormRow>
    </Container>
  );
};

export default CarForm;
