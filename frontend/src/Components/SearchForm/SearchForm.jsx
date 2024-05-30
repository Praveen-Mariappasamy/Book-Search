import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './SearchForm.css';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const [inputValue, setInputValue] = useState('The Lost World');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = inputValue.trim();
    if (trimmedSearchTerm === '') {
      setSearchTerm("The Lost World");
      setResultTitle("Please Enter Something....!");
    } else {
      setSearchTerm(trimmedSearchTerm);
      setResultTitle(""); // Clear any previous error message
    }
    navigate("/book");
  };

  return (
    <div className="search-form">
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type="text"
                className='form-control'
                placeholder="The Lost World..."
                value={inputValue}
                onChange={handleChange}
              />
              <button type="submit" className='cursor flex flex-c'>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
