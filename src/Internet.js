import React, { useState, useEffect } from "react";

const Internet = (props) => {
  const [isOnLine, setIsOnLine] = useState(null);

  const handleStateChange = (status) => {
    setIsOnLine(status.isOnLine);
  };

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStateChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStateChange);
    };
  });

  if (isOnLine === null) {
    return "Loading.......";
  }

  return isOnline ? "Online" : "Offline";
};

export default Internet;
