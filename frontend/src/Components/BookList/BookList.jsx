import React from 'react';
import { useGlobalContext } from '../../context';
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
import './BookList.css';
import Book from './Book';

const BookList = () => {

  if(localStorage.getItem('email')===null){
    window.location.replace('/login');
  }

  const { books, loading, resultTitle } = useGlobalContext();

  const booksWithCover = books.map((singleBook) => {
    return {
      ...singleBook,
      cover_img: singleBook.cover ? singleBook.cover : coverImg
    };
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {booksWithCover.slice(0, 30).map((item, index) => (
            <Book key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;
