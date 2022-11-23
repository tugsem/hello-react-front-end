import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMessages } from '../redux/greetingReducer';

const Greeting = () => {
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayMessages())
  }, []);

  return (
    <h1>{message}!</h1>
  )
};

export default Greeting;