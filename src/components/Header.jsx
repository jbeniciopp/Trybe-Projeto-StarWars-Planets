import React from 'react';
import logo from '../images/logo-star wars.png';

export default function Header() {
  return (
    <header>
      <div>
        <h1>
          <img className="image" src={ logo } alt="logo star wars" />
        </h1>
      </div>
    </header>
  );
}
