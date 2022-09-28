import * as React from 'react';
import './TrackCoinForm.css';

function TrackCoinForm(props) {
  return (
    <div className="trackCoinForm">
      <label>Coin</label>
      <input type="text"></input> <button>Track coin</button>{' '}
    </div>
  );
}

export default TrackCoinForm;
