import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ReservationCard from '../components/reservations/ReservationCard';

const GridContainer = styled(Grid)`
  background-color: #f6f6f6;
  padding: 2rem;
  min-height: 100vh;
  width: 100%;
  max-width: 1320px;
  margin: 0 !important;
`;

const MyReservations = () => {
  const reservations = useSelector((state) => state.reservations.data);

  return (
    <GridContainer
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{
        xs: 1, sm: 8, md: 8, lg: 12,
      }}
    >
      {reservations.map((reservationDetail) => (
        <Grid item key={uuidv4()} xs={2} sm={4} md={4}>
          <ReservationCard key={uuidv4()} reservationDetail={reservationDetail} />
        </Grid>
      ))}
    </GridContainer>
  );
};

export default MyReservations;
