import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Select = styled.select`
  background-color: white;
  padding: 0.5rem;
  align-self: flex-start;
  border-radius: 5px;
  color: grey;
  border: 2px solid grey;
  margin-bottom: 0.5rem;
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
