import React from 'react';

const SweetAlert = ({ title, text, icon, onClose }) => {
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
      textAlign: 'center',
    },
    button: {
      marginTop: '10px',
    },
    icon: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    text: {
      fontSize: '14px',
      marginBottom: '10px',
    },
  };

  const iconMap = {
    success: '✔️',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
  };

  return (
    <div style={styles.alert}>
      <div style={styles.icon}>{iconMap[icon]}</div>
      <div style={styles.title}>{title}</div>
      <div style={styles.text}>{text}</div>
      <button style={styles.button} onClick={onClose}>Close</button>
    </div>
  );
};

export default SweetAlert;
