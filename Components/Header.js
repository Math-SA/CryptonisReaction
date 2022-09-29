import * as React from 'react';
import ServerStatus from './ServerStatus';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Cryptonis Reaction</h1>
      <div>
        a react based frontend for{' '}
        <a href="https://github.com/Math-SA/Cryptonis">Cryptonis</a>
        <ServerStatus></ServerStatus>
      </div>
    </div>
  );
}
export default Header;
