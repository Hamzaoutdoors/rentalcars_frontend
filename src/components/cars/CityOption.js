import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Select = styled.select`
  background-color: white;
  padding: 0.5rem;
  border: 1px solid grey;
  border-radius: 5px;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: grey;
  box-shadow: 0px 3px 7px -2px rgba(79,79,79,0.64);
`;

const CityOption = () => {
  const { cities } = useSelector((state) => state.reservations);

  return (
    <Select>
      { cities.map((city) => (
        <option key={uuidv4()} value={city.id}>
          { city.name }
        </option>
      ))}
    </Select>
  );
};

export default CityOption;
