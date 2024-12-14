import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/configureStore';
import { LoadingOverlay } from '@/shared/components/LoadingOverlay/LoadingOverlay';
import Home from './features/Home/Home';
import Login from './features/Auth/pages/Login/Login';

export default function App() {
  return (
    <Provider store={store}>
      <LoadingOverlay />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}
