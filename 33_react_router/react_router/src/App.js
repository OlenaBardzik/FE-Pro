import { Route, Routes } from 'react-router-dom';

import AlbumList from "./features/AlbumsList.js";
import UserList from "./features/UserList.js";
import PhotoList from './features/PhotoList.js';

function App() {
  return (
      <Routes>
         <Route path="/" element={<UserList />} />
          <Route path="users" element={<UserList />} />
          <Route path="albums" element={<AlbumList />} />
          <Route path="photos" element={<PhotoList />} />
      </Routes>
  );
}

export default App;
