/* eslint-disable camelcase */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CarDetails = () => {
  const state = useSelector((state) => state.cars.data);
  const { car_id } = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <img src={state[car_id].image_url} alt="car to rent" />
        </div>
        <div className="col-12 col-md-4">
          <h1>
            { state[car_id].name }
          </h1>
          <h2> Car Details </h2>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
