import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
