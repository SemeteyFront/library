import React from 'react';
import { useNavigate } from 'react-router-dom';
import star from '../../images/icons/staricon.png';
import book from '../../images/img/book.png';
import './books.scss';

function Books({ obj }) {
  const navigate = useNavigate();
  return (
    <li className='books__lists'>
      <img className='book-img' src={obj.image_url} alt='book' />
      <div className='book-data'>
        <p className='book__name'>{obj.name}</p>
        <p className='book__author'>{obj.author}</p>
      </div>
      <div className='book-star'>
        <button className='book-btn' onClick={() => navigate("/detailsbook/"+obj.id)}>Посмотреть</button>
        <span>
          4<img src={star} alt='star' />
        </span>
      </div>
    </li>
  );
}

export default Books;
