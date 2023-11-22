import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // เปิดใช้งาน Bootstrap CSS
import Navbar from './components/Navbar';
import Navv from './components/Test';
import Body from './components/Body';

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
    </>
  );
}

export default App;
