import React, { useContext, useEffect, useState } from 'react';
import { bookContext } from '../../contexts/bookContext';
import Books from '../Books';
import next from '../../../images/icons/nextslider.png';
import back from '../../../images/icons/backslider.png';
import './newbooks.scss';

function NewBooks() {
  const { newBook, newBooks, totalPages } = useContext(bookContext);
  const [page, setPage] = useState(0);

  useEffect(() => {
    newBook(page);
  }, [page]);

  return (
    <div className='books'>
      <h2 className='books__title'>Новинки</h2>
      <ul className='books__items'>
        {newBooks ? newBooks.map((item) => <Books key={item.id} obj={item} />) : null}
      </ul>
      {page + 1 == totalPages ? null : (
        <img src={next} alt='next' className='next' onClick={(e) => setPage(page + 1)} />
      )}
      {page > 0 ? (
        <img src={back} alt='back' className='back' onClick={(e) => setPage(page - 1)} />
      ) : null}
    </div>
  );
}

export default NewBooks;
