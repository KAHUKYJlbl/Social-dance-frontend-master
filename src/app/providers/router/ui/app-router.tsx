import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../config/router-config';

export const AppRouter = () => (
  <div className='page'>
    {/* TODO: add page loader */}
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  </div>
);
