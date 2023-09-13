import { useState } from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css'

function App() {


  return (
    <>
        <Routes>
                <Route >                    
                    <Route index element={<App />} />
                    <Route path='HEader' element={<App />} />
                    <Route path='users' element={<Users />} />
                    <Route path='user/:id/:nombre' element={<UsersDetails />} />
                </Route>
            </Routes>
    </>
  )
}

export default App
