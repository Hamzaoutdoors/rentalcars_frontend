/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import {
  DateRange,
} from '@mui/icons-material';
import { numOfDays, totalAmount } from '../../logic/date';

const DetailBtn = styled(Button)`
  background-color: #5688ae !important;
  text-decoration: none !important;
  text-align: center !important;
  color: white !important;
  border: 1px solid #6d7993 !important;
  border-radius: 10px !important;
  padding: 0.3rem !important;
  font-size: 0.8rem !important;
&:hover {
  color: #6d7993 !important;
  background-color: white !important;
`;

const Title = styled(DialogTitle)`
  background-color: #5688ae; 
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Content = styled(DialogContent)`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > .desc {
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Urbanist', sans-serif;
  }`;

const Dates = styled(Typography)`
display: flex;
flex: 1;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin-bottom: 1rem;
`;

const Date = styled(Typography)`
  display: flex;
  padding-left: 1rem;
  font-size: 1rem !important;
`;

const DateContent = styled(Typography)`
    font-size: 1rem;
    padding-left: 0.5rem;
    border-bottom: 1px double #ccc;
`;

const AmountText = styled(Typography)`
  font-size: 1rem;
  text-shadow: 1px 1px 1px #5688ae;
  font-family: 'Urbanist', sans-serif;
  color: black;
  border-bottom: 1px solid #ccc;
`;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <Title sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </Title>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

const ReservationDetail = ({ reservationDetail }) => {
  const { start_date, end_date, car } = reservationDetail;
  const dailyPrice = car.description.price_daily;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DetailBtn variant="outlined" onClick={handleClickOpen}>
        Reservation Detail
      </DetailBtn>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Reservation Detail
        </BootstrapDialogTitle>
        <Content dividers>
          <Dates>
            <Date>
              <DateRange />
              <DateContent>
                {start_date}
              </DateContent>
            </Date>
            <Date>
              <DateRange />
              <DateContent>
                {end_date}
              </DateContent>
            </Date>
          </Dates>
          <Typography gutterBottom className="desc">
            Reservation Duration :
            {' '}
            {numOfDays(start_date, end_date)}
            {' '}
            days
          </Typography>
          <Typography gutterBottom>
            The Total Amount of the Reservation is:
          </Typography>
          <AmountText>
            Total Amount:
            {' '}
            <span>$</span>
            <span>{totalAmount(dailyPrice, start_date, end_date)}</span>
          </AmountText>
        </Content>
      </BootstrapDialog>
    </>
  );
};

export default ReservationDetail;

ReservationDetail.propTypes = {
  reservationDetail: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
  }).isRequired,
};
