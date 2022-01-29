/* eslint-disable jsx-a11y/label-has-associated-control */
// import { useState } from 'react';
// import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Form = styled.form`
  padding: 0.5rem;
  border-radius: 20px 0 20px 0;
  width: 100%;
  min-height: 20vh;
  background-color: #ffefd5;
  text-decoration: none;
  text-align: center !important;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  `;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
  id: props.id,
  name: props.name,
  value: props.value,
  min: props.min,
  max: props.max,
}))`
  border-radius: 20px;
  width: 100%;
  padding: 0.5rem;
  `;

const Label = styled.label`
  font-family: 'Urbanist', 'Arial', sans-serif;
  color: #f6a40e;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding: 0.5rem;
  `;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const FilterTitle = styled.span`
  font-family: 'Urbanist', 'Arial', sans-serif;
  color: #f6a40e;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding-left: 2rem;
  width: 100%;
  `;

const SelectCity = styled.select`
    width: 200px !important;
    height: 40px !important;
    padding: 1rem;
    margin: 0.5rem;
    height: 20px;
    border-radius: 20px;
    color: black;
  `;

const SelectCityOption = styled.option``;

const ReserveForm = () => {
  const minDate = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  const cities = useSelector((state) => state.reservations.cities);

  return (
    <>
      <Form>
        <Wrapper>
          <DateContainer>
            <Label htmlFor="start">Start Date :</Label>
            <Input
              type="date"
              id="start"
              name="reserve-start"
              value={minDate}
              min={minDate}
              max={maxDate}
              required
            />
          </DateContainer>
          <DateContainer>
            <Label htmlFor="start">End Date :</Label>
            <Input
              type="date"
              id="end"
              name="reserve-end"
              value={minDate}
              min={minDate}
              max={maxDate}
            />
          </DateContainer>
        </Wrapper>
        <Wrapper>
          <Filter>
            <FilterTitle>City</FilterTitle>
            <SelectCity className="form-select">
              <SelectCityOption selected disabled>
                Select City
              </SelectCityOption>
              {cities.map((option) => (
                <SelectCityOption key={option.name} value={option.name}>
                  {option.name}
                </SelectCityOption>
              ))}
            </SelectCity>
          </Filter>
        </Wrapper>
      </Form>
    </>
  );
};

export default ReserveForm;
