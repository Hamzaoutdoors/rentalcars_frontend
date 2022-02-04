/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ReserveModal from '../reservations/ReserveModal';
import { mobile } from '../../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1320px;
  height: 100vh;
  color: black;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const CarImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 80%;
`;

const ReturnButton = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 0.5rem;
  position: absolute;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #97BF11;
  text-decoration: none;
  width: 10%;
  height: 3rem;
  color: white;
  &:hover {
    color: white;
  }
`;

const DetailsTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & :nth-child(odd) {
    background-color: #E2E3E5;
  }
`;

const DetailsTableRow = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  font-family: 'Urbanist', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 500;
  & :nth-child(n) {
    background-color: inherit;
  }
`;

const CarTitle = styled.h1`
  font-family: 'Urbanist', 'Arial', sans-serif;
  font-size: 40px;
  font-weight: bold;
`;

const SubTitle = styled.p`
  font-family: 'Urbanist', 'Arial', sans-serif;
  font-size: 12px;
  font-weight: bold;
`;

const PromoHeader = styled.p`
  font-family: 'Urbanist', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding-left: 0.5rem;
  align-self: flex-start;
`;

const DiscoverMore = styled.p`
  font-family: 'Urbanist', 'Arial', sans-serif;
  font-size: 12px;
  font-weight: 700;
  ${mobile({
    margin: '0 1rem 2rem 0',
  })}
`;

const ColorWheel = styled.div`
  --num-colors: 12;
  --color-size: calc(100% / var(--num-colors));
  width: 80px;
  height: 80px;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 50%;
  background: conic-gradient(
    #f22 calc(0 * var(--color-size)) calc(1 * var(--color-size)), 
    #f06 calc(1 * var(--color-size)) calc(2 * var(--color-size)), 
    #63b calc(2 * var(--color-size)) calc(3 * var(--color-size)), 
    #44b calc(3 * var(--color-size)) calc(4 * var(--color-size)), 
    #09f calc(4 * var(--color-size)) calc(5 * var(--color-size)), 
    #0af calc(5 * var(--color-size)) calc(6 * var(--color-size)), 
    #0bd calc(6 * var(--color-size)) calc(7 * var(--color-size)), 
    #098 calc(7 * var(--color-size)) calc(8 * var(--color-size)), 
    #0a4 calc(8 * var(--color-size)) calc(9 * var(--color-size)), 
    #7c3 calc(9 * var(--color-size)) calc(10 * var(--color-size)), 
    #fe0 calc(10 * var(--color-size)) calc(11 * var(--color-size)), 
    #fb0 calc(11 * var(--color-size)) calc(12 * var(--color-size))
  );
  transform: rotate(calc(-180deg / var(--num-colors)));
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    background: white;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
  }
  ${mobile({
    margin: '0 1rem 2rem 0',
  })}
`;

const findCarById = (id, cars) => {
  let car = null;
  cars.forEach((currCar) => {
    if (currCar.id === parseInt(id, 10)) car = currCar;
  });
  return car;
};

const CarDetails = () => {
  const cars = useSelector((state) => state.cars.data);
  const { car_id } = useParams();
  const car = findCarById(car_id, cars);
  const navigate = useNavigate();

  if (car) {
    return (
      <div className="container" style={{ margin: 0, paddingBottom: '1rem' }}>
        <div className="row">
          <FirstColumn className="col-12 col-lg-8" style={{ padding: 0 }}>
            <CarImg src={car.imgUrl} />
            <div className="d-flex p-relative align-items-end w-100">
              <ReturnButton onClick={() => navigate('/cars', { replace: true })}>
                <ArrowBackIosIcon />
              </ReturnButton>
              <div className="mx-auto text-center">
                <ChangeCircleOutlinedIcon sx={{ fontSize: '40px', marginBottom: '0.5rem' }} />
                <h2 style={{ fontSize: '14px', margin: '0' }}>
                  Rotate
                </h2>
                <p style={{ fontSize: '14px', margin: '0' }}>
                  Vehicle
                </p>
              </div>
            </div>

          </FirstColumn>
          <SecondColumn className="col-12 col-lg-4" style={{ maxHeight: '90%', padding: '0 2.3rem' }}>
            <div className="text-end">
              <CarTitle>
                { car.name.charAt(0).toUpperCase()
                + car.name.slice(1) }
              </CarTitle>
              <SubTitle>
                Rent this car for a week and receive 1 extra day!
              </SubTitle>
            </div>

            <DetailsTable>
              <DetailsTableRow>
                <p>
                  Daily Rent:
                </p>
                <p>
                  $
                  {car.description.price_daily}
                </p>
              </DetailsTableRow>
              <DetailsTableRow>
                <p>
                  Weekly Rent:
                </p>
                <p>
                  $
                  {car.description.price_daily * 7 }
                </p>
              </DetailsTableRow>
              <DetailsTableRow>
                <p>
                  Monthly Rent:
                </p>
                <p>
                  $
                  {car.description.price_monthly * 0.7}
                </p>
              </DetailsTableRow>
              <DetailsTableRow>
                <p>
                  Insurance Fee:
                </p>
                <p>
                  %
                  {car.description.insurance_fee}
                </p>
              </DetailsTableRow>
            </DetailsTable>
            <PromoHeader>
              <strong>30% Discount</strong>
              {' '}
              on Monthly plan!
            </PromoHeader>
            <div>
              <DiscoverMore>
                DISCOVER MORE MODELS
                {' '}
                <ChevronRightOutlinedIcon />
              </DiscoverMore>
            </div>
            <ColorWheel />
            <ReserveModal />
          </SecondColumn>
        </div>
      </div>
    );
  }
  return (
    <Container />
  );
};

export default CarDetails;
