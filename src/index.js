import React, { Suspense } from 'react';
import {createRoot} from 'react-dom/client';
import { Routes ,Route, BrowserRouter } from "react-router-dom";
import App from './App';
import "./index.css";
import AttendancePage from './views/AttendancePage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<App/>}/>
          <Route exact path="/asistencia" element={<AttendancePage/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);

