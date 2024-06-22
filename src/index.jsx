import React from 'react';
import ReactDOM from 'react-dom';
import SweetAlert from './SweetAlert'; // Adjust the path as per your project structure

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your component inside the root
root.render(
  <React.StrictMode>
    <SweetAlert
      title="Hello!"
      text="This is a sweet alert"
      icon="success"
      onClose={() => root.unmount()}
    />
  </React.StrictMode>
);
