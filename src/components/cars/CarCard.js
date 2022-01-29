/* eslint-disable react/forbid-prop-types */

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { mobile } from '../../responsive';

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
    background-color: white;
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
    margin: 7px;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
        background-color: #e9f5f5;
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

const CarCard = ({ item }) => {
  const {
    imageUrl, name, brand, color,
  } = item;
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
      <Image src={imageUrl} />
      <Info>
        <NavLink to={`/${item.id}/details`}>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
        </NavLink>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        {/* <Icon>
          <DeleteOutlined />
        </Icon> */}
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
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
};
