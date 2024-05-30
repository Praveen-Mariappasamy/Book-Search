import "./BookList.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ id, title, authors, cover_img, categories }) => {
  return (
    <Link to={`/book/${id}`}>
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={cover_img} alt={`${title} cover`} />
      </div>
      <div className='book-item-info text-center'>
       
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{title}</span>
          </div>
        

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author(s): </span>
          <span>{authors}</span>
        </div>

        <div className='book-item-info-item categories fs-15'>
          <span className='text-capitalize fw-7'>Categories: </span>
          <span>{categories}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Book;
