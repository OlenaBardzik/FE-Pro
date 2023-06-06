import { Route, Routes, Navigate } from 'react-router-dom';

import AlbumList from "./features/Album/AlbumsList.js";
import UserList from "./features/User/UserList.js";
import PhotoList from './features/Photo/PhotoList.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/users" />}/>
        <Route path="users" element={<UserList />}>
          <Route path=":userId" element={<Navigate to=":userId/albums" />} />
          <Route path=":userId/albums" element={<AlbumList />}>
            <Route path=":albumId" element={<Navigate to=":albumId/photos" />} />
            <Route path=":albumId/photos" element={<PhotoList />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
