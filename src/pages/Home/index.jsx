import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header';
import NaverItem from '../../components/NaverItem';

import './styles.css';

function Home() {
  const [naversList, setNaversList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    setNaversList([]);
    setLoading(true);
    const response = await api.get('/navers');
    console.log(response.data);
    setNaversList(response.data);
    setLoading(false);
  }

  // function toggleShowDetail() {
  //   setShowDetail(!showDetail);
  // }

  async function deleteNaver(id) {
    console.log(id);
    const response = await api.delete(`/navers/${id}`);
    console.log(response.status);
    getList();
  }
  return (
    <div id="home-page">
      <Header />
      <div className="page-head">
        <h1>Navers</h1>
        <Link to="/naver-form" className="add-button">
          Adicionar Naver
        </Link>
      </div>
      {loading ? (
        <p>Carregando Navers...</p>
      ) : (
        <section className="navers-list">
          {naversList.map(naver => (
            <NaverItem
              key={naver.id}
              naver={naver}
              deleteNaver={deleteNaver}
              // toggleShowDetail={toggleShowDetail}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Home;
