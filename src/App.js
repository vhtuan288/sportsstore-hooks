import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import ShopConnector from './shop/ShopConnector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="shop/*" element={<ShopConnector />} />
        <Navigate to="shop" />
      </Routes>
    </Router>
  );
}

export default App;
