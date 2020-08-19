import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { login, isAuthenticated } from '../../services/auth';

import api from '../../services/api';

import logo from '../../assets/img/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import './styles.css';
function Login() {
  const history = useHistory();
  const [auth, setAuth] = useState({ email: '', password: '' });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/users/login', auth);
      login(response.data.token);

      history.push('/');
    } catch (err) {
      console.log(err);
      alert('erro ao fazer login');
    }
  }

  function onChange(e) {
    const { value, name } = e.target;
    setAuth({ ...auth, [name]: value });
  }

  return isAuthenticated() ? (
    <Redirect to="/" />
  ) : (
    <div id="login-page">
      <form onSubmit={handleSubmit} autoComplete="off">
        <img className="logo" src={logo} alt="nave.rs" />
        <Input
          name="email"
          label="E-mail"
          type="email"
          placeholder="E-mail"
          onChange={onChange}
          value={auth.email}
        />
        <Input
          name="password"
          label="Senha"
          type="password"
          placeholder="Senha"
          value={auth.password}
          onChange={onChange}
        />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  );
}

export default Login;
