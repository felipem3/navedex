import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { diffDateNowToString, diffYearsToString } from '../../utils/dateUtils';

import ModalConfirm from '../ModalConfirm';
import Modal from '../Modal';

import deleteIcon from '../../assets/img/icons/Delete-Icon.svg';
import editIcon from '../../assets/img/icons/Edit-Icon.svg';

import './styles.css';
import api from '../../services/api';
import Loader from '../Loader';

function NaverDetail({ visible, toggleShowDetail, naverId, deleteNaver }) {
  const defaultImageUrl =
    'https://peoplefacts.com/wp-content/uploads/2014/06/mystery-person.png';
  const [showConfirm, setShowConfirm] = useState(false);
  const [naver, setNaver] = useState({});
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (visible) {
      setLoading(true);

      console.log(naverId);
      api.get(`/navers/${naverId}`).then(response => setNaver(response.data));

      setLoading(false);
    }
  }, [naverId, visible]);

  useEffect(() => {
    setImgUrl(naver.url);
  }, [naver.url]);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);
  function handleDeleteNaver() {
    deleteNaver();
  }
  if (visible) {
    return (
      <>
        <Modal visible={visible} toggleVisible={toggleShowDetail}>
          {loading ? (
            <Loader />
          ) : (
            <div id="naver-detail">
              <img
                src={imgUrl}
                alt="Avatar"
                className="avatar"
                onError={() => setImgUrl(defaultImageUrl)}
              />
              <div className="detail">
                <h1 className="name">{naver.name}</h1>
                <h2 className="office">{naver.job_role}</h2>
                <p className="title">Idade</p>
                <p className="description">
                  {diffYearsToString(naver.birthdate, 'YYYY-MM-DD')}
                </p>
                <p className="title">Tempo de Empresa</p>
                <p className="description">
                  {diffDateNowToString(naver.admission_date, 'YYYY-MM-DD')}
                </p>
                <p className="title">Projetos que participou</p>
                <p className="description">{naver.project}</p>
                <div className="actions">
                  <a href="/#" onClick={() => setShowConfirm(true)}>
                    <img src={deleteIcon} alt="icone deletar" />
                  </a>
                  <Link to={`/naver-form/${naver.id}`}>
                    <img src={editIcon} alt="icone editar" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Modal>
        <ModalConfirm
          visible={showConfirm}
          onCancel={() => setShowConfirm(false)}
          onConfirm={handleDeleteNaver}
          showButtons={true}
          title="Excluir Naver"
          message="Tem certeza que deseja excluir este Naver?"
        />
      </>
    );
  }
  return <></>;
}

NaverDetail.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleShowDetail: PropTypes.func.isRequired,
  naverId: PropTypes.string.isRequired,
  deleteNaver: PropTypes.func.isRequired,
};

export default NaverDetail;
