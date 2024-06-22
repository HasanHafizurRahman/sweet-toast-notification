import React from 'react';

const SweetAlert = ({ message, onClose }) => {
  const styles = {
    alert: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '20px',
      border: '1px solid #000',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    },
    button: {
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.alert}>
      {message}
      <button style={styles.button} onClick={onClose}>Close</button>
    </div>
  );
};

export default SweetAlert;
