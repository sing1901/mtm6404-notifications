import { useState } from 'react'
import './App.css'
import './Notifications.css'
import NotificationList from './NotificationList'
import notificationsData from './notifications'

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  // Function to clear a single notification
  const handleClearOne = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }

  // Function to clear all notifications
  const handleClearAll = () => {
    setNotifications([])
  }

  return (
    <div className="App">
      <h1>Notification Center</h1>
      
      {/* Using children prop to pass content to NotificationList */}
      <NotificationList 
        notifications={notifications} 
        onClearOne={handleClearOne} 
        onClearAll={handleClearAll}
      >
        {/* This is the children prop content */}
        <p>Manage your notifications below</p>
      </NotificationList>
    </div>
  )
}

export default App