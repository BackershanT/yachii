import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);
  return <AppRoutes />;
};

export default App
