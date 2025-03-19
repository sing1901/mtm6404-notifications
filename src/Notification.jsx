import React from 'react';

function Notification({ notification, onClear }) {
  return (
    <div className="notification">
      <div className="notification-content">
        <h3>{notification.name}</h3>
        <p>{notification.message}</p>
      </div>
      <button onClick={() => onClear(notification.id)}>Clear</button>
    </div>
  );
}

export default Notification;