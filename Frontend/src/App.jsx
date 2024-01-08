
import React from 'react';
import Home from './Home';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import RegistrationForm from '/src/RegistrationForm';
import UsersPage from '/src/UsersPage';
const App = () => {
  return (

<Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
    <Route path="/UsersPage" element={<UsersPage/>}/>
</Routes>
  )}

export default App;
