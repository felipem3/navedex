import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalConfirm from '../../components/ModalConfirm';

import './styles.css';

function NaverForm() {
  const history = useHistory();
  const { id } = useParams();
  const [naver, setNaver] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getNaver() {
      setLoading(true);
      const response = await api.get(`/navers/${id}`);
      console.log(response.data);
      setNaver(response.data);
      setLoading(false);
    }
    if (id) {
      getNaver();
    }
  }, [id]);

  const [showConfirm, setShowConfirm] = useState(false);

  function toggleShowConfirm() {
    setShowConfirm(!showConfirm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const naverUpdate = {
      admission_date: moment(naver.admission_date, 'YYYY-MM-DD').format(
        'DD/MM/YYYY',
      ),
      birthdate: moment(naver.birthdate, 'YYYY-MM-DD').format('DD/MM/YYYY'),
      job_role: naver.job_role,
      name: naver.name,
      project: naver.project,
      url: naver.url,
    };
    try {
      const response = await api.put(`/navers/${id}`, naverUpdate);
      console.log(response);
      history.push('/');
    } catch (err) {
      console.log(err);
      alert('erro ao salvar');
    }
    // toggleShowConfirm();
  }

  function onChange(e) {
    const { value, name } = e.target;
    setNaver({ ...naver, [name]: value });
  }
  // admission_date: '2020-08-20T00:00:00.000Z';
  // birthdate: '2000-03-08T00:00:00.000Z';
  // id: '650b6cc2-43d9-4bdd-9184-aa2cfa452a1f';
  // job_role: 'Front-end';
  // name: 'Gabriel Oliveira Carrilhos';
  // project: 'Naver test';
  // url: 'https://scontent.fpet1-1.fna.fbcdn.net/v/t1.0-9/92460955_2842015322584979_5900894677946597376_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ht=scontent.fpet1-1.fna&oh=c39c92d778f00f02d9513c06167262e7&oe=5F33FDAA';
  // user_id: 'ea44a85f-3e6b-4443-9f66-1d974c498900';
  return (
    <div id="naver-form-page">
      <Header />
      <div className="box">
        <div className="box-title">
          <button type="button" onClick={() => history.goBack()}>
            &lt;
          </button>
          <h1>Adicionar Naver</h1>
        </div>
        {loading ? (
          <p>Carregando</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Nome"
              type="text"
              label="Nome"
              value={naver.name || ''}
              onChange={onChange}
              required={true}
            />
            <Input
              name="job_role"
              placeholder="Cargo"
              type="text"
              label="Cargo"
              value={naver.job_role || ''}
              onChange={onChange}
              required={true}
            />
            <Input
              name="birthdate"
              placeholder="Data de Nascimento"
              type="date"
              label="Data de Nascimento"
              value={
                moment(naver.birthdate, 'YYYY/MM/DD').format('YYYY-MM-DD') || ''
              }
              onChange={onChange}
              required={true}
            />
            <Input
              name="admission_date"
              placeholder="Data de Admissão"
              type="date"
              label="Data de Admissão"
              value={
                moment(naver.admission_date, 'YYYY/MM/DD').format(
                  'YYYY-MM-DD',
                ) || ''
              }
              onChange={onChange}
              required={true}
            />
            <Input
              name="project"
              placeholder="Projetos que participou"
              type="text"
              label="Projetos que participou"
              value={naver.project || ''}
              onChange={onChange}
              required={true}
            />
            <Input
              name="url"
              placeholder="URL da foto do Naver"
              type="text"
              label="URL da foto do Naver"
              value={naver.url || ''}
              onChange={onChange}
              required={true}
            />
            <div className="action">
              <Button type="submit">Salvar</Button>
            </div>
          </form>
        )}
      </div>
      <ModalConfirm
        visible={showConfirm}
        onCancel={toggleShowConfirm}
        title="Naver criado"
        message="Naver criado com sucesso!"
      />
    </div>
  );
}

export default NaverForm;
