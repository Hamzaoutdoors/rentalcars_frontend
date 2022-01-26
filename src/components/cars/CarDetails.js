/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const CarImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 80%;
`;

const ReturnButton = styled.a.attrs((props) => ({
  href: props.href,
}))`
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

const CarDetails = () => {
  const state = useSelector((state) => state.cars.data);
  const { car_id } = useParams();
  return (
    <div className="container" style={{ margin: 0 }}>
      <div className="row">
        <div className="d-flex flex-column align-items-center col-12 col-md-8" style={{ padding: 0 }}>
          <CarImg src={state[car_id].image_url} />
          <div className="d-flex p-relative align-items-end w-100">
            <ReturnButton href="/">
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

        </div>
        <div className="col-12 col-md-4">
          <h1>
            { state[car_id].name.charAt(0).toUpperCase()
            + state[car_id].name.slice(1) }
          </h1>
          <h2> Car Details </h2>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
