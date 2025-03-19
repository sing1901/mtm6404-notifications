import React from 'react';
import Notification from './Notification';

function NotificationList({ notifications, onClearOne, onClearAll, children }) {
  return (
    <div className="notification-list">
      <div className="notification-header">
        <h2>Notifications ({notifications.length})</h2>
        {notifications.length > 0 && (
          <button onClick={onClearAll}>Clear All</button>
        )}
      </div>
      {children}
      
      {notifications.length === 0 ? (
        <p>No notifications to display</p>
      ) : (
        notifications.map(notification => (
          <Notification 
            key={notification.id}
            notification={notification}
            onClear={onClearOne}
          />
        ))
      )}
    </div>
  );
}

export default NotificationList;