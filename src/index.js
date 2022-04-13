import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const dataId = Date.now();
console.log(dataId + 60 * 60 * 24 * 1.1);
console.log(dataId + 60 * 60 * 24 * 1.2);
console.log(dataId + 60 * 60 * 24 * 1.3);
console.log(dataId + 60 * 60 * 24 * 1.4);
console.log(dataId + 60 * 60 * 24 * 1.5);
console.log(dataId + 60 * 60 * 24 * 1.6);
console.log(dataId + 60 * 60 * 24 * 1.7);
console.log(dataId + 60 * 60 * 24 * 1.8);
