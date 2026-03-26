import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react'; // ✅ Required for lazy loading

import Header from './components/Header';
import AuthRoutes from './routes/Auth.routes';
import UserRoutes from './routes/User.routes';
import OtherRoutes from './routes/OtherRoutes';

function App() {

  /*
  |--------------------------------------------------------------------------
  | Combine All Route Configurations
  |--------------------------------------------------------------------------
  | - AuthRoutes → login, register, etc.
  | - UserRoutes → user-related pages
  |
  | Spread operator merges all route arrays into one
  |
  */
  const allRoutes = [
    ...AuthRoutes,
    ...UserRoutes,
    ...OtherRoutes
  ];

  return (
    <>
      {/* 
        |--------------------------------------------------------------------------
        | Global Header Component
        |--------------------------------------------------------------------------
        | - Visible on all pages
        | - If you want layout-based routing later, we can move this into layout
      */}
      <Header />

      {/* 
        |--------------------------------------------------------------------------
        | Application Routes
        |--------------------------------------------------------------------------
        | - Iterates over allRoutes array
        | - Dynamically creates <Route /> components
        |
        | IMPORTANT:
        | - Each route element is wrapped inside <Suspense>
        | - This is REQUIRED for lazy-loaded components (React.lazy)
        |
        | fallback:
        | - UI shown while lazy component is loading
        | - You can replace <div>Loading...</div> with spinner or skeleton UI
      */}
      
      {/* <Routes>
        {allRoutes.map((item, index) => (
          <Route
            key={item.path || index} // ✅ Prefer path over index
            path={item.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {item.element}
              </Suspense>
            }
          />
        ))}
      </Routes> */}

      {/* or */}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {allRoutes.map((item, index) => (
            <Route key={item.path} {...item} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;