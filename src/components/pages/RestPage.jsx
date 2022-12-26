import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Rest.css';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { authContext } from '../contexts/authContext';

const RestPage = () => {
  const navigate = useNavigate();
  const { passwordRecovery } = useContext(authContext);
  const { emailRecovery } = useContext(authContext);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  function sendCode() {
    let passwordRecoveryObj = new FormData();
    passwordRecoveryObj.append('email', email);
    // passwordRecoveryObj.append("new_password", password);
    // passwordRecoveryObj.append("new_pass_confirm", repeatPassword);
    // passwordRecoveryObj.append("code", code);
    passwordRecovery(passwordRecoveryObj, navigate);
    localStorage.removeItem('email');
  }

  return (
    <>
      <div className='fon'>
        <div className='rest-form'>
          <CloseIcon
            className='close'
            style={{ left: '368px', top: '8px' }}
            onClick={() => navigate('/')}
          />
          <h2 className='title-rest'>Сброс пароля</h2>
          <p className='title-emailu'>Укажите почту:</p>
          <input
            type='text'
            className='inp-emaile'
            placeholder='Введите'
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='rest-btn' onClick={sendCode}>
            Отправить сообщение
          </button>
          <div id='snackbar'>Код отправлен! Проверьте свою почту...</div>
          <div id='snackbar_error'>Неправильные данные!</div>
        </div>
      </div>
    </>
  );
};

export default RestPage;
