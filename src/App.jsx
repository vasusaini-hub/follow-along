import React from 'react';
import {BrowserRouter , Routes , Route,Router } from 'react-router-dom';
import { LoginPage } from './routes/routes';
import  "./App.css"

function App(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;









