import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { helix } from 'ldrs'
import Loading from './components/loading';

// Lazy load the pages and components
const Pages = lazy(() => import('./pages/pages'));
const Welcome = lazy(() => import('./pages/welcome'));
const Chat = lazy(() => import('./pages/chat'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const NotFound = lazy(() => import('./components/not-found'));
const LogIn = lazy(() => import('./pages/LogIn'));
const SignUp = lazy(() => import('./pages/SignUp'));


 
helix.register()

// Define a fallback loading component
 
// All the routes about the app
const router = createBrowserRouter([
  {
    path: '/',
    element: <Pages />,
    children: [
      { index: true, element: <Welcome /> },
    ],
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/signUp',
    element: <SignUp />,
  },
  {
    path: '/chat/dashboard',
    element: <Chat />,
    children: [
      { index: true, element: <Dashboard /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      {/* Toast container for react-toastify */}
      <ToastContainer theme="dark" />
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
