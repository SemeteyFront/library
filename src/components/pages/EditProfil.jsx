import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/EditProfil.css'
import { authContext } from '../contexts/authContext';
import { Password } from '@mui/icons-material';

const EditProfil = () => {
  const navigate = useNavigate();
  const { user, pass, handleEdit } = useContext(authContext);
  
  const [img, setImg] = useState('');
  const [userName, setUserName] = useState(user.username);
  const [password, setPassword] = useState(pass);

  function snackbar_error() {
    var x = document.getElementById("snackbar_error");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 500);
  }

  function saveUser() {
    if (!img||
      !userName.trim() ||
      !password.trim()
    )
    {
      snackbar_error()
      return;
    };
    let formData = new FormData();
    const selectedFile = document.getElementById('avatar').files[0];
    formData.append('avatar', selectedFile,selectedFile.name);
    formData.append('username', userName);
    formData.append('password', password);
  
    handleEdit(formData, navigate);
    navigate('/personPage')
  
  };

  return (
    <>
    <div className="edit-profil-form">
      <h3 className='edit-prof-title'>Редактировать профиль</h3>
      <CloseIcon className='close2' style={{position: 'relative', left: '950px', top: '155px'}} onClick={() => navigate("/")}/>
      <div className='edit-fon-2'>
      <img className='avatar-foto' src={user.avatar_url} alt="jjj" />
          <button className='edited-btn'>Изменить фото</button>
          <input type="file" id='avatar' className='edited-file'
           value={img}  onChange={e => setImg(e.target.value)}/>
      <button className='deleted-btn'>Удалить</button>
      </div>
      <div className='inputs'>
      <div className='div_1'>
        <h2 className='title_name'>Логин</h2><br/>
            <input type="text" className='inp_1'
             value={userName}  onChange={e => setUserName(e.target.value)}/>
      </div>
      <div className='div_2'>
        <h2 className='title_name'>Почта</h2><br/>
        <input type="text" placeholder={user.email} className='inp_1' />
      </div>
      <div className='div_3'>
        <h2 className='title_name'>Пароль</h2><br/>
            <input type="text" className='inp_1'
             value={password}  onChange={e => setPassword(e.target.value)}/>
          </div>
      </div>
        <button className='btn_save' onClick={saveUser}>Сохранить</button>
        <button className='btn_delete_account'>Удалить аккаунт</button>
     </div>
    </>
  )
}

export default EditProfil