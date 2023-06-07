import { Route, Routes, Navigate } from 'react-router-dom';

import UserRoutes from './features/User/UserRoutes.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/users" />}/>
        <Route path="/users/*" element={<UserRoutes />} />
      </Routes>
  );
}

export default App;
