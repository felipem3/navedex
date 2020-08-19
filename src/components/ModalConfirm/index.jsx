import React from 'react';

import Modal from '../Modal';

import './styles.css';

function ModalConfirm({
  visible,
  onCancel,
  title,
  message,
  showButtons,
  onConfirm,
}) {
  function handleCancel() {
    onCancel();
  }
  function handleConfirm() {
    onConfirm();
  }
  return (
    <Modal visible={visible} toggleVisible={onCancel} size="sm">
      <div id="modalConfirm">
        <p className="title">{title}</p>
        <p className="message">{message}</p>
        {showButtons && (
          <div className="actions">
            <button className="outline" onClick={handleCancel}>
              Cancelar
            </button>
            <button onClick={handleConfirm}>Excluir</button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ModalConfirm;
