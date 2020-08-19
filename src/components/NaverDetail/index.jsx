import React, { useState } from 'react';
import moment from 'moment';
import Modal from '../Modal';

import deleteIcon from '../../assets/img/icons/Delete-Icon.svg';
import editIcon from '../../assets/img/icons/Edit-Icon.svg';
import avatar from '../../assets/img/avatar.png';

import './styles.css';
import ModalConfirm from '../ModalConfirm';

function NaverDetail({ visible, toggleShowDetail, naver, deleteNaver }) {
  const [showConfirm, setShowConfirm] = useState(false);

  function handleDeleteNaver() {
    deleteNaver();
  }
  return (
    <>
      <Modal visible={visible} toggleVisible={toggleShowDetail}>
        <div id="naver-detail">
          <img src={naver.url} alt="Avatar" className="avatar" />
          <div className="detail">
            <h1 className="name">{naver.name}</h1>
            <h2 className="office">{naver.job_role}</h2>
            <p className="title">Idade</p>
            <p className="description">
              {moment().diff(moment(naver.birthdate, 'YYYY-MM-DD'), 'years')}{' '}
              anos
            </p>
            <p className="title">Tempo de Empresa</p>
            <p className="description">
              {moment().diff(
                moment(naver.admission_date, 'YYYY-MM-DD'),
                'years',
              )}{' '}
              ano(s)
            </p>
            <p className="title">Projetos que participou</p>
            <p className="description">{naver.project}</p>
            <div className="actions">
              <a onClick={() => setShowConfirm(true)}>
                <img src={deleteIcon} alt="icone deletar" />
              </a>
              <a>
                <img src={editIcon} alt="icone editar" />
              </a>
            </div>
          </div>
        </div>
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

export default NaverDetail;
