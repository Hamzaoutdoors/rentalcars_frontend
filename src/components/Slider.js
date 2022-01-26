import React from 'react';
import styled from 'styled-components';
import CarCard from './cars/CarCard';
import data from '../redux/cars/helpers/data';
// import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const Slider = () => (
  <Container>
    {data.filter((car) => car.id % 2 !== 0).map((item) => (
      <CarCard key={item.id} item={item} />
    ))}
  </Container>
);

export default Slider;
