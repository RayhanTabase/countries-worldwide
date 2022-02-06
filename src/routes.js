import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import City from './pages/City';

const AppRoutes = () => (
  <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/city/weather/:id/:city" element={<City />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
