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
      <img src={logo} alt="nave.rs" className="logo" />
      <Link to="/login" onClick={handleLogout}>
        Sair
      </Link>
    </header>
  );
}

export default Header;
