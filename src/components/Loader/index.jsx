import React from 'react';

import './styles.css';

function Loader() {
  return (
    <div id="loader-container">
      <div className="loader"></div>
      <span>Carregando...</span>
    </div>
  );
}

export default Loader;
