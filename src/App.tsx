import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails';
import ServiceList from './components/ServiceList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ServiceList />} />
        <Route path="/services/:id/details" element={<ServiceDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
