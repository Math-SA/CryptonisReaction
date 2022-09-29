import * as React from 'react';
import { useState } from 'react';
import './ServerStatus.css';
import Axios from 'axios';

function ServerStatus(props) {
  const serverPingUrl = 'https://devplay-cryptonis.onrender.com/ping';
  const pingAllowed = false;
  const pingInterval = 3000;
  const pingServer = () => {
    Axios.get(serverPingUrl).then((res) => {
      props.repaint(res.status == 200);
    });
  };

  const setServerStatusClass = () => {
    if (props.online) {
      return 'status online';
    } else {
      return 'status offline';
    }
  };

  if (pingAllowed) {
    setTimeout(pingServer, pingInterval);
  }

  return <div className={setServerStatusClass()}></div>;
}
export default ServerStatus;
