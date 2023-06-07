import { Route, Routes, Navigate } from 'react-router-dom';

import AlbumRoutes from '../Album/AlbumRoutes.js';
import UserList from "./UserList.js";

export default function UserRoutes() {
  return (
      <Routes>
        <Route path="/" element={<UserList />}>
          <Route path=":userId" element={<Navigate to=":userId/albums" />} />
          <Route path=":userId/albums/*" element={<AlbumRoutes />}/>
        </Route>
      </Routes>
  );
}