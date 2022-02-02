import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import CarCard from '../components/cars/CarCard';

const GridContainer = styled(Grid)`
  background-color: #f6f6f6;
  padding: 2rem;
  min-height: 100vh;
  width: 100%;
  max-width: 1320px;
  margin: 0 !important;
`;

const MyCars = () => {
  const cars = useSelector((state) => state.cars.data);

  return (
    <GridContainer
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{
        xs: 1, sm: 8, md: 8, lg: 12,
      }}
    >
      {cars.map((item) => (
        <Grid item key={uuidv4()} xs={2} sm={4} md={4}>
          <CarCard key={uuidv4()} item={item} />
        </Grid>
      ))}
    </GridContainer>
  );
};

export default MyCars;
