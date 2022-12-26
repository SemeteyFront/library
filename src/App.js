import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContextProvider from './components/contexts/authContext';
import Header from './components/Header';
import Main from './components/Main';
import BookContextProvider from './components/contexts/bookContext';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import RestPage from './components/pages/RestPage';
import RestorePage from './components/pages/RestorePage';
import PersonPage from './components/pages/PersonPage';
import DetailsBook from './components/pages/DetailsBook';
import EditProfil from './components/pages/EditProfil';

const App = () => {
  return (
    <>
      <BookContextProvider>
        <AuthContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/rest' element={<RestPage />} />
            <Route path='/restore' element={<RestorePage />} />
            <Route path='/personpage' element={<PersonPage />} />
            <Route path='/detailsbook/:id' element={<DetailsBook />} />
            <Route path='/editProfile' element={<EditProfil />} />
          </Routes>
        </AuthContextProvider>
      </BookContextProvider>
    </>
  );
};

export default App;
