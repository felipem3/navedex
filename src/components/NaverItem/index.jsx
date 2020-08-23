import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import deleteIcon from '../../assets/img/icons/Delete-Icon.svg';
import editIcon from '../../assets/img/icons/Edit-Icon.svg';
import NaverDetail from '../../components/NaverDetail';
import ModalConfirm from '../../components/ModalConfirm';

import './styles.css';
import { Link } from 'react-router-dom';

function NaverItem({ naver, deleteNaver }) {
  const defaultImageUrl =
    'https://peoplefacts.com/wp-content/uploads/2014/06/mystery-person.png';
  const [showDetail, setShowDetail] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  useEffect(() => {
    setImgUrl(naver.url);
  }, [naver.url]);
  function handleToggleShowDetail() {
    setShowDetail(!showDetail);
  }

  function handleToggleShowConfirm() {
    setShowConfirm(!showConfirm);
  }

  function handleShowConfirm() {
    setShowConfirm(!showConfirm);
  }

  async function handleDeleteNaver() {
    deleteNaver(naver.id);
    setShowDetail(false);
    setShowConfirm(false);
  }

  return (
    <>
      <div className="naver-item">
        <span onClick={handleToggleShowDetail}>
          <img
            src={imgUrl}
            alt="avatar"
            className="avatar"
            onError={() => setImgUrl(defaultImageUrl)}
          />
        </span>
        <p className="name">{naver.name}</p>
        <p className="job-role">{naver.job_role}</p>

        <div className="actions">
          <a href="/#" onClick={handleShowConfirm}>
            <img src={deleteIcon} alt="icone deletar" />
          </a>
          <Link to={`/naver-form/${naver.id}`}>
            <img src={editIcon} alt="icone editar" />
          </Link>
        </div>
      </div>

      <NaverDetail
        naverId={naver.id}
        visible={showDetail}
        toggleShowDetail={handleToggleShowDetail}
        deleteNaver={handleDeleteNaver}
      />
      <ModalConfirm
        visible={showConfirm}
        onCancel={handleToggleShowConfirm}
        onConfirm={handleDeleteNaver}
        showButtons={true}
        title="Excluir Naver"
        message="Tem certeza que deseja excluir este Naver?"
      />
    </>
  );
}

NaverItem.propTypes = {
  naver: PropTypes.object.isRequired,
  deleteNaver: PropTypes.func.isRequired,
};

export default NaverItem;
