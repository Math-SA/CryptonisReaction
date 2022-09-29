import * as React from 'react';
import { useState } from 'react';
import './ServerStatus.css';

function ServerStatus() {
  const [serverStatusClass, setServerStatusClass] = useState('status offline');
  return <div className={serverStatusClass}></div>;
}
export default ServerStatus;
