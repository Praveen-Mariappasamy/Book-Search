import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppProvider } from './context';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import BookList from './Components/BookList/BookList'
import BookDetails from './Components/BookDetails/BookDetails'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          
          <Route path='/book' element={<BookList/>} />
          <Route path='/book/:id' element={<BookDetails/>} />
        </Route>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
