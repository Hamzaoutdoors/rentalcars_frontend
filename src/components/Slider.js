import { useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import CarCard from './cars/CarCard';
import { mobile } from '../responsive';
import store from '../redux/configureStore';
import { setItemSize, setSliderIndex } from '../redux/utils/actions/sliderActions';

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
    pointer-events: ${(props) => (((props.slideIndex === 0 && props.direction === 'left')
     || ((props.slideIndex === props.carsLength - props.size) && props.direction === 'right')) && 'none')};
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
    ${mobile({
    width: '50px',
  })};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 5%;
    width: 100%;
    transition: all 1.5s ease-in-out;
`;

const dispatchItemSize = (action, size) => {
  store.dispatch(action(size));
};

const dispatchSliderIndex = (action, index) => {
  store.dispatch(action(index));
};

const Slider = () => {
  const { slideIndex, itemsSize } = useSelector((state) => state.utils.slider);
  const cars = useSelector((state) => state.cars.data);

  const handleResize = () => {
    if (window.innerWidth > 1350) {
      dispatchItemSize(setItemSize, 3);
    } else if (window.innerWidth > 700) {
      dispatchItemSize(setItemSize, 2);
    } else {
      dispatchItemSize(setItemSize, 1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', () => {
      handleResize();
    });
  }, []);

  const handleNext = (direction) => {
    if (direction === 'left' || slideIndex === cars.length - itemsSize) {
      dispatchSliderIndex(setSliderIndex, slideIndex - 1);
    } else {
      dispatchSliderIndex(setSliderIndex, slideIndex + 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" size={itemsSize} onClick={() => handleNext('left')} slideIndex={slideIndex} carsLength={cars.length}>
        <ArrowLeftOutlined style={{ fontSize: '3rem', color: '#e6e6e6' }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {cars.slice(slideIndex, slideIndex + itemsSize).map((item) => (
          <CarCard key={item.id} item={item} />))}
      </Wrapper>
      <Arrow direction="right" size={itemsSize} onClick={() => handleNext('right')} slideIndex={slideIndex} carsLength={cars.length}>
        <ArrowRightOutlined style={{ fontSize: '3rem', color: '#e6e6e6' }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
