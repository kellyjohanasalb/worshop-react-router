import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <>
    <Routes>
          <Route >
            <Route path='header' element={<Header />} />
            <Route path='main' element={<Main />} />
            <Route path='footer' element={<Footer />} />
          </Route>
      </Routes>
    </>
  )
}

export default App;
