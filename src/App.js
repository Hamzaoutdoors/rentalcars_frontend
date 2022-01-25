import React from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="container">
      <h1>Home sweet home</h1>
    </div>
  );
};

export default App;
