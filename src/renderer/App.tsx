import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/configureStore';
import { LoadingOverlay } from '@/shared/components/LoadingOverlay/LoadingOverlay';
import { useState } from 'react';
import AgoraRTC, { AgoraRTCProvider } from 'agora-rtc-react';
import Home from './features/Home/Home';
import Login from './features/Auth/pages/Login/Login';

export default function App() {
  const [engine] = useState(() =>
    AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' }),
  );
  return (
    <Provider store={store}>
      <AgoraRTCProvider client={engine}>
        <LoadingOverlay />
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </AgoraRTCProvider>
    </Provider>
  );
}
