import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Header from '../../components/Header';
import NaverItem from '../../components/NaverItem';

import './styles.css';
import ModalConfirm from '../../components/ModalConfirm';
import Loader from '../../components/Loader';

function Home() {
  const [naversList, setNaversList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [modalConfirmTitle, setModalConfirmTitle] = useState('');
  const [modalConfirmDescription, setModalConfirmDescription] = useState('');

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    setNaversList([]);
    setLoading(true);
    const response = await api.get('/navers');
    setNaversList(response.data);
    setLoading(false);
  }

  function toggleShowConfirm() {
    setShowConfirm(!showConfirm);
  }

  async function deleteNaver(id) {
    const response = await api.delete(`/navers/${id}`);
    if (response.status === 200) {
      setShowConfirm(true);
      setModalConfirmTitle('Naver excluído');
      setModalConfirmDescription('Naver excluído com sucesso');
    }
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
        <Loader />
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
      <ModalConfirm
        visible={showConfirm}
        onCancel={toggleShowConfirm}
        showButtons={false}
        title={modalConfirmTitle}
        message={modalConfirmDescription}
      />
    </div>
  );
}

export default Home;
