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

const CardImage = styled(CardMedia).attrs((props) => ({
  image: props.image,
  component: 'img',
  height: props.height,
}))`
    background-size: cover;
`;

const DetailsButton = styled(Button)`
  background-color: #5688ae !important;
  text-decoration: none !important;
  text-align: center !important;
  color: white !important;
  border: 1px solid #6d7993 !important;
  border-radius: 10px !important;
&:hover {
  color: #6d7993 !important;
  background-color: white !important;
`;

const CancelButton = styled(Button)`
  color: white !important;
  background-color: #C70000 !important;
  border: 1px solid red !important;
  border-radius: 10px !important;
  width: 100px !important;
  margin-left: 1rem !important;
  &:hover {
    color: #c70000 !important;
    background-color: white !important;
  }
`;

const ReservationCard = ({ reservationDetail }) => {
  // eslint-disable-next-line camelcase

  // This linters complains about the use of
  // camelCase for the variables, but in our API we use snake_case for Ruby on rails convention.

  const { start_date, end_date, city } = reservationDetail;

  return (
    <Card
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
        image="https://i.ibb.co/GPj1fBB/11.png"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be
          {' '}
          lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
          {end_date}
          {' '}
          and
          {' '}
          {city}
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {start_date}
        </Typography>
      </CardContent>
      <CardActions>
        <DetailsButton size="small">Reservation Detail</DetailsButton>
        <CancelButton size="small" className="btn btn-danger">Cancel</CancelButton>
      </CardActions>
    </Card>
  );
};

export default ReservationCard;

ReservationCard.propTypes = {
  reservationDetail: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
