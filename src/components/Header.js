import React from 'react';
import { ReactComponent as Logo } from '../assets/Logo.svg';

const Header = () => {
  return (
    <header>
      {/* Render it just like any other component */}
      <Logo alt="Little Lemon Logo" />
    </header>
  );
};

export default Header;