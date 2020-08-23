import React from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../../services/auth';

import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
  function handleLogout() {
    logout();
  }
  return (
    <header>
      <a href="https://nave.rs/" target="blank">
        <img src={logo} alt="nave.rs" className="logo" />
      </a>
      <Link to="/login" onClick={handleLogout}>
        Sair
      </Link>
    </header>
  );
}

export default Header;
