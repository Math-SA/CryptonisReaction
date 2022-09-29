import * as React from 'react';
import './ServerStatus.css';
import Axios from 'axios';

function ServerStatus(props) {
  const getClass = (online) => {
    if (online) {
      return 'status online';
    } else {
      return 'status offline';
    }
  };

  const [serverStatusClass, setServerStatusClass] = React.useState(
    getClass(false)
  );

  const serverPingUrl = 'https://devplay-cryptonis.onrender.com/ping';
  const pingAllowed = true;
  const pingWait = 3000;
  let pingCallInterval = null;
  const [serverAlive, setServerAlive] = React.useState(false);
  const pingServer = () => {
    if (pingAllowed) {
      Axios.get(serverPingUrl).then((res) => {
        setServerAlive(res.status == 200);
      });
    }
  };

  React.useEffect(() => {
    if (pingCallInterval == null) {
      pingCallInterval = setInterval(pingServer, pingWait);
    }
    setServerStatusClass(getClass(serverAlive));
  }, [serverAlive]);

  return <div className={serverStatusClass}></div>;
}
export default ServerStatus;
