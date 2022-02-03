/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Star, LocalGasStation, WbAuto, AcUnit, PriceCheck, EventSeat,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { mobile } from '../../responsive';
import ReservationDetail from './ReservationDetail';
import { cancelReservation } from '../../redux/reservations/reservationsSlice';

const CardContainer = styled(Card)`
   padding: 1rem;
   ${mobile({
    padding: '0.4rem',
  })};
`;

const CardImage = styled(CardMedia).attrs((props) => ({
  image: props.image,
  component: 'img',
  height: props.height,
}))`
    background-size: cover;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #ccc;
`;

const CardTitle = styled.div`
  font-size: 1.5rem; 
  font-weight: bold;
  padding-bottom: 0.5rem;
`;

const Icon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    margin: 7px;
    cursor: pointer;
    color: #5688ae;
`;

const CarDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  text-align: center;
  width: 100%;
`;

const ListIcons = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
  padding: 0;
  `;

const DetailIcon = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: gray;
  margin: 0.1rem;
  font-size: 0.8rem !important;
`;

const CancelButton = styled(Button)`
  color: white !important;
  background-color: #C70000 !important;
  border: 1px solid red !important;
  border-radius: 10px !important;
  width: 100px !important;
  margin-left: 1rem !important;
  font-size: 0.8rem !important;
  &:hover {
    color: #c70000 !important;
    background-color: white !important;
  }
`;

const ReservationCard = ({ reservationDetail }) => {
  // eslint-disable-next-line camelcase

  // This linters complains about the use of
  // camelCase for the variables, but in our API we use snake_case for Ruby on rails convention.

  const {
    car, id,
  } = reservationDetail;
  const { imgUrl } = car;
  const carName = car.name;
  const dispatch = useDispatch();

  return (
    <CardContainer
      sx={{
        width: {
          sx: 1.0, // 100%
          sm: 250,
          md: 350,
        },
      }}
    >
      <CardImage
        component="img"
        alt="green iguana"
        height="140"
        image={imgUrl}
      />
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Reservation City:
          </Typography> */}
        <TitleContainer>
          <CardTitle variant="h5" component="div">
            {carName}
          </CardTitle>
          <Icon>
            <Star />
          </Icon>
        </TitleContainer>
        <CarDetail>
          <ListIcons>
            <DetailIcon sx={{ fontSize: 10 }}>
              <LocalGasStation />
              <Typography component="span">
                Diesel
              </Typography>
            </DetailIcon>
            <DetailIcon>
              <WbAuto />
              <Typography component="span">
                Auto
              </Typography>
            </DetailIcon>
            <DetailIcon>
              <AcUnit />
              <Typography component="span">
                Climate
              </Typography>
            </DetailIcon>
            <DetailIcon>
              <EventSeat />
              <Typography component="span">
                Comfort
              </Typography>
            </DetailIcon>
            <DetailIcon>
              <PriceCheck />
              <Typography component="span">
                Eco
              </Typography>
            </DetailIcon>
          </ListIcons>
        </CarDetail>
      </CardContent>
      <CardActions>
        <ReservationDetail reservationDetail={reservationDetail} />
        <CancelButton onClick={() => dispatch(cancelReservation(id))} size="small">Cancel</CancelButton>
      </CardActions>
    </CardContainer>
  );
};

export default ReservationCard;

ReservationCard.propTypes = {
  reservationDetail: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    city_id: PropTypes.string.isRequired,
  }).isRequired,
};
