import React from 'react';
import { Route , Routes } from 'react-router-dom';

import Card from "./components/Card";
import GlobalContext from "./context/GlobalContext";
import ViewProduct from './pages/ViewProduct';





function App() {
  return (
    <div className="container p-3">
      <div className="d-flex justify-content-center">
        <GlobalContext>
          <Routes>
            <Route path='/' index element={<Card />} />
            <Route path='/view/:productId' element={<ViewProduct />} />
          </Routes>
        </GlobalContext>
      </div>
    </div>
  );
}

export default App;
