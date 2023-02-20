import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
   <div>
      <Routes>
        <Route path ='/' element={<Greeting />}/>
      </Routes>
   </div>
  );
}

export default App