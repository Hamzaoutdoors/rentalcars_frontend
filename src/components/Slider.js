import { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import CarCard from './cars/CarCard';
import data from '../redux/cars/helpers/data';
// import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 60%;
    width: 100%;
    overflow-x: hidden;
`;

const Arrow = styled.div`
    position: absolute;
    pointer-events: ${(props) => (((props.slideIndex === 0 && props.direction === 'left') || ((props.slideIndex === data.length - 3) && props.direction === 'right')) && 'none')};
    width: 80px;
    height: 50px;
    border-top-${(props) => (props.direction === 'left' ? 'right' : 'left')}-radius: 180px;
    border-bottom-${(props) => (props.direction === 'left' ? 'right' : 'left')}-radius: 180px;
    padding: ${(props) => (props.direction === 'left' ? '0 0 0 20px' : '0 20px 0 0')};
    background-color: #97BF11;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -50px;
    bottom: 0;
    left: ${(props) => (props.direction === 'left' && '10px')};
    right: ${(props) => (props.direction === 'right' && '10px')};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    transition: all 0.5s ease-in-out;
    &:hover {
      transform: translateX(${(props) => (props.direction === 'left' ? '-3px' : '3px')});
        opacity: 1;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: all 1.5s ease-in-out;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    if (slideIndex === data.length - 3) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleNext()} slideIndex={slideIndex}>
        <ArrowLeftOutlined style={{ fontSize: '3rem', color: '#e6e6e6' }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {data.slice(slideIndex, slideIndex + 3).map((item) => (
          <CarCard key={item.id} item={item} />))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleNext()} slideIndex={slideIndex}>
        <ArrowRightOutlined style={{ fontSize: '3rem', color: '#e6e6e6' }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
