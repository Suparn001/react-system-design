import React, { useEffect } from 'react';

const ErrorToast = ({ message = "Something went wrong!", onClose, duration = 3000 }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div style={styles.toast}>
      <span>{message}</span>

      <button onClick={onClose} style={styles.closeBtn}>
        ✖
      </button>
    </div>
  );
};

const styles = {
  toast: {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    zIndex: 1000,
    minWidth: "250px"
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default ErrorToast;