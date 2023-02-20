import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

function Greeting() {
  const greeting = useSelector((state) => state.greeting.message.message);
  const status = useSelector((state) => state.greeting.status);

  let content;
  if(status === 'succeeded') {
    content = greeting;
  }
  if(status === 'loading') {
    content = 'Loading...';
  }


  return (
    <>
      <h1>Rails React Webpack Greetings!</h1>
      <p>{ content }</p>
    </>
  );
}

export default Greeting