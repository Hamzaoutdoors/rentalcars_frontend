/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { mobile } from '../responsive';
import { authenticateUser, LOGIN_ENDPOINT } from '../redux/auth/authSlice';

const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 1320px;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1557825631-19082bca3803?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60") center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  ${mobile({ width: '80%' })};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: 300;
`;

const Button = styled.button.attrs((props) => ({
  type: props.type,
}))`
  padding: 12px 18px;
  width: 50%;
  background-color: teal;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 10px 0 15px 0;
  &:hover {
    background-color: #00CCCC;
  }
`;

const Link = styled.a`
  cursor: pointer;
  margin: 5px 0;
  font-size: 12px;
  justify-self: start;
  text-decoration: underline;
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const authenticate = (e) => {
    e.preventDefault();

    dispatch(authenticateUser({ form: e.target, url: LOGIN_ENDPOINT }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log('here');
      navigate('/', { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={(event) => authenticate(event)}>
          <Input type="email" name="email" placeholder="Email" defaultValue="" />
          <Input type="password" name="password" placeholder="Password" defaultValue="" />
          <Button type="submit">LOG IN</Button>
          <Link>SIGN UP</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
