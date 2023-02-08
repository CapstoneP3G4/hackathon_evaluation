import React from 'react';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Frontpage/>}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
