import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/DetailsBook.css';
import CloseIcon from '@mui/icons-material/Close';
import editprof from "../../images/icons/editprof.png"
import book from '../../images/icons/book.png';
import star from '../../images/icons/staricon.png'
import deletebtn from '../../images/icons/deletebtn.png'

const DetailsBook = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    

  return (
    <div>
        <div className='div-form'>
        <CloseIcon className='close2' style={{position: 'relative', left: '10px', top: '10px'}} onClick={() => navigate("/")}/>
        <img src={book} alt='book' className='book-detail'/>
        <button className='btn-read2'>Читать</button>
        <button className='btn-downl'>Скачать</button>

        <p className='numberr'>4</p>
        <img src={star} alt={star} className="starr"/>
        <a className='feedback' href="">+Оставить отзыв</a>
        
        <div>
        <h3 className='title_name'>«Успех или успеть»</h3>
        <p className='title_p'>«Успех или успеть» Данная книга раскрывает Вам, уважаемый читатель, пошаговые действия достижения успеха. Поможет понять и осознать, что именно для Вас является успехом. Поможет обрести здоровье, любовь, финансовую независимость и прочее факторы успешных людей. Советую Вам прочесть ее несколько раз,или сделать так ...</p>
        <div className='data_title'>
        <span className='data_title2'>Автор:</span> <span >IvanI</span><br/>
        <span className='data_title2'>Жанр:</span> <span >Иван</span><br/>
        <span className='data_title2'>Возрастное ограничение:</span> <span >Иванов</span><br/>
        <span className='data_title2'>Дата издание:</span> <span >@ivan.ivanov</span>
      </div>
        </div>
        <img src={editprof} alt='profil' className='edit-prof2' onClick={() => navigate("/editbook")}/>
        <img src={deletebtn} alt='delete' className='delete' onClick={() => navigate("")}/>
        </div>
    </div>
  )
}

export default DetailsBook