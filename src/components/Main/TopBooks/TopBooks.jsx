import React, { useContext, useEffect, useState } from 'react';
import Books from '../Books';
import next from '../../../images/icons/nextslider.png';
import back from '../../../images/icons/backslider.png';
import './topbooks.scss';
import { bookContext } from '../../contexts/bookContext';

function TopBooks() {
  const { readTopBook, topBooks, totalTop } = useContext(bookContext);
  const [pageTop, setPageTop] = useState(0);

  useEffect(() => {
    readTopBook(pageTop);
  }, [pageTop]);

  return (
    <div className='books'>
      <h2 className='books__title'>Топ книги</h2>
      <ul className='books__items'>
        {topBooks ? topBooks.map((item) => <Books key={item.id} obj={item} />) : null}
      </ul>
      {pageTop + 1 == totalTop ? null : (
        <img src={next} alt='next' className='next' onClick={(e) => setPageTop(pageTop + 1)} />
      )}
      {pageTop > 0 ? (
        <img src={back} alt='back' className='back' onClick={(e) => setPageTop(pageTop - 1)} />
      ) : null}
    </div>
  );
}

export default TopBooks;
