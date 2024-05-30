import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyBuJM7SalayZ3iQ7gwZ_a-3vuiYQZdxzvo"
const AppContext = React.createContext();
const startIndex = 0; // You can adjust this value based on the pagination
const maxResults = 40;

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("The Lost World");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
        const response = await fetch(`${URL}${searchTerm}&key=${key}&startIndex=${startIndex}&maxResults=${maxResults}`);
      const data = await response.json();
      console.log(data)
      const { items } = data;

      if (items) {
        const newBooks = items.slice(0, 20).map((bookSingle) => {
          const { id, volumeInfo } = bookSingle;
          const { title, authors, categories, imageLinks, description } = volumeInfo;

          return {
            id,
            title,
            authors: authors || ["No author information"],
            categories : categories || ["No Category information"],
            cover: imageLinks ? imageLinks.thumbnail : null,
            description: description || "No description available",
          };
        });
        setBooks(newBooks);
        setResultTitle(newBooks.length > 1 ? "Your Search Result" : "No Search Result Found!");
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{
      loading, books, setSearchTerm, resultTitle, setResultTitle,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
