import { Route, Routes, Navigate } from 'react-router-dom';

import AlbumList from "./AlbumsList.js";
import PhotoList from '../Photo/PhotoList.js';

export default function AlbumRoutes() {
  return (
      <Routes>
          <Route path="/" element={<AlbumList />}>
            <Route path="/:albumId" element={<Navigate to="/:albumId/photos" />} />
            <Route path="/:albumId/photos" element={<PhotoList />} />
          </Route>
      </Routes>
  );
}