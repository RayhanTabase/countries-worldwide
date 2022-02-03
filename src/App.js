import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppRoutes from './routes';
import getCountries from './utils/getCountries';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-[#4369B2] min-h-[100vh]">
        <Header />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
