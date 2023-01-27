import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// Components
import App from './App';
import Root from './routes/Root';
import Error from './routes/Error';
import Customermain from './routes/customer/Customermain';

const Router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Root />} path='/' errorElement={<Error />}>
    <Route element={<Customermain />} path='customer' />
  </Route>

))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
