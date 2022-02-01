import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 1320px;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60") center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  ${mobile({ width: '75%' })};

`;

const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 300px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: 300;
  ${mobile({ minWidth: '75%' })};
`;

const Aggrement = styled.p`
  font-size: 12px;
  font-weight: 200;
  margin: 20px 0;
  text-align: center;
`;

const Button = styled.button`
  padding: 12px 22px;
  width: 40%;
  background-color: teal;
  cursor: pointer;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    background-color: #00CCCC;
  }
`;

const Register = () => (
  <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Username" />
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" />
        <Aggrement>
          By clicking
          {' '}
          <b>Register</b>
          , you agree to our Terms, Data Policy and Cookie
          Policy. You may receive SMS notifications from us and/or our
          partners. Text
          {' '}
          STOP
          {' '}
          to stop.
        </Aggrement>
        <Button>Register</Button>
      </Form>
    </Wrapper>
  </Container>
);

export default Register;
