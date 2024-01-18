import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { AppRouter } from './providers/router/ui/app-router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const App = () => (
  <div className='app'>
    <ToastContainer />
    <Header />
    <AppRouter />
    <Footer />
  </div>
);
