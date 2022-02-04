/* eslint-disable camelcase */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { CarRentalOutlined, DeleteOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { mobile } from '../../responsive';
import { removeCar } from '../../redux/cars/carsSlice';
import { setSliderIndex } from '../../redux/utils/actions/sliderActions';

const Info = styled.div`
   opacity: 0;
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.2);
   z-index: 3;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: all 0.5s ease;
   cursor: pointer;
   border-radius: 25px;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 20px;
    max-width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    ${mobile({
    maxWidth: '250px !important',
    height: 'auto',
  })};
`;

const Image = styled.img`
   width: 100%;
   height: 30%;
   flex: 1;
   z-index: 2;
`;

const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    position: absolute;
    margin: -50px -30px 0 0;
    ${mobile({
    width: '200px',
    height: '200px',
  })};
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
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        background-color: #${(props) => props.bg};
        transform: scale(1.1);
    }
`;

const Detail = styled.div`
    width: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & h3 {
        font-size: 15px;
        font-weight: bold;
        color: black;
        text-transform: uppercase;
        text-align: center;
        border-bottom: 2px dotted #D3D3D3;
    }

    & h4 {
        font-size: 11px;
        font-weight: bold;
        color: #D3D3D3;
        text-align: center;
        margin-top: 5px;
    }
`;

const handleSlideIndex = (slideIndex, dispatch, action) => {
  if (slideIndex - 1 < 0) {
    dispatch(action(0));
  } else {
    dispatch(action(slideIndex - 1));
  }
};

const CarCard = (props) => {
  const { item } = props;
  const {
    imgUrl, name, brand, id, user_id,
  } = item;
  const { color } = item.description;
  const dispatch = useDispatch();
  const { slideIndex } = useSelector((state) => state.utils.slider);
  const { user } = useSelector((state) => state.auth.user.payload);

  return (
    <Container
      as={motion.div}
      initial={{
        opacity: 0,
        translateX: 50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
      }}
      transition={{
        duration: 0.2,
        delay: 0.2,
      }}
      style={{ maxWidth: '300px' }}
    >
      <Circle bgColor={color} />
      <Image src={imgUrl} />
      <Info>
        <NavLink to={`/cars/${id}/details`}>
          <Icon bg="e9f5f5">
            <CarRentalOutlined />
          </Icon>
        </NavLink>
        <Icon bg="d86a77">
          <FavoriteBorderOutlined />
        </Icon>
        {
          (
            user && user.id === user_id
          ) && (
          <Icon
            bg="d11a2a"
            onClick={() => {
              dispatch(removeCar(id));
              handleSlideIndex(slideIndex, dispatch, setSliderIndex);
            }}
          >
            <DeleteOutlined />
          </Icon>
          )
        }
      </Info>
      <Detail>
        <h3>{name}</h3>
        <h4>
          {brand}
        </h4>
      </Detail>
    </Container>
  );
};

export default CarCard;

CarCard.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
};
