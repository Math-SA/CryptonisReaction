import * as React from 'react';
import './Dashboard.css';
import TrackCoinForm from './TrackCoinForm';
function Dashboard(props) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <TrackCoinForm />
      <div className="coins">Tracked coins</div>
    </div>
  );
}

export default Dashboard;
