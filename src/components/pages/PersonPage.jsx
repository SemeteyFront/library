import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import star from "../../images/icons/staricon.png";
import "../../styles/PersonPage.css";
import editprof from "../../images/icons/editprof.png"
import logout from "../../images/icons/logout.png"
import { authContext } from '../contexts/authContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const PersonPage = () => {
  const { currentUser, user, handleLogout, myBook, book } = useContext(authContext);
  const [key, setKey] = useState('myBook');
  
  useEffect(() => {
    if (currentUser) {
      myBook();
  }  
  }
    , [])
  
  
    const navigate = useNavigate();
    return (<>
      <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3">
        <Tab eventKey="myBook" title="Мои книги">
        <div className='my-book'>
          <a className='download-book' href="/downbook">+Загрузить книгу</a>
{ book ? book.map((item)=>( <div className='card-book1'>
             <div className='card-top'>
              <img src={item.image_url} alt='book'/>
    <h1 style={{ marginTop: '7%' }}>{item.name}</h1>
    <p style={{ display: 'flex', justifyContent: 'center', fontSize: '13px', bottom: '12px', position: 'relative' }}>{item.author}</p>
             </div>
            <div className='card-bottom'>
              <p className='number'>4</p>
              <img src={star} alt={star} className="star"/>
              <button className='btn-read' onClick={() => navigate("/detail")}>Посмотреть</button>
            </div>
          </div>)) : null}
          
          </div>
        </Tab>
        <Tab eventKey="saveBook" title="Сохраненные">
          
        </Tab>
      </Tabs>
            {currentUser ?
                <div className='data-person'>
               
                <img src={user.avatar_url} alt='profil' className='person'/>
            <img src={editprof} alt='profil' className='edit-prof' onClick={() => navigate("/editProfile")} />
            <img src={logout} alt='profil' className='logout' onClick={handleLogout} />

            
          <div className='data-title'>
                        <span className='data-title2'>Логин:</span> <span >{user.username}</span><br/>
                        {user.name ? <><span className='data-title2'>Имя:</span> <span >{user.name}</span><br/> </>: null} 
                        {user.surname ? <> <span className='data-title2'>Фамилия:</span> <span >Иванов</span><br /></> : null}
                        <span className='data-title2'>Почта:</span> <span >{user.email}</span>
          </div> </div>: null}
          {/* <h4 className='history-search'>История поиска</h4>
          <img  alt='time-history' className='time-history'/>
          <div className='title-his'>
          <span className='title-his1'>"Внутри убийцы"</span><br/><span >Марк Омерк</span>
          </div> */}
        </div>
        
        </>)
}

export default PersonPage



 