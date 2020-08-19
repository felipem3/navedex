import React, { useState } from 'react';

import deleteIcon from '../../assets/img/icons/Delete-Icon.svg';
import editIcon from '../../assets/img/icons/Edit-Icon.svg';
import NaverDetail from '../../components/NaverDetail';
import ModalConfirm from '../../components/ModalConfirm';
import api from '../../services/api';

import './styles.css';
import { Link } from 'react-router-dom';

function NaverItem({
  toggleShowDetail,
  toggleShowConfirm,
  naver,
  deleteNaver,
}) {
  const [showDetail, setShowDetail] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
          <img src={naver.url} alt="avatar" className="avatar" />
        </span>
        <p className="name">{naver.name}</p>
        <p className="job-role">{naver.job_role}</p>

        <div className="actions">
          <a onClick={handleShowConfirm}>
            <img src={deleteIcon} alt="icone deletar" />
          </a>
          <Link to={`/naver-form/${naver.id}`}>
            <img src={editIcon} alt="icone editar" />
          </Link>
        </div>
      </div>
      <NaverDetail
        naver={naver}
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

export default NaverItem;
