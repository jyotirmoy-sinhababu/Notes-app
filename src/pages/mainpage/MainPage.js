import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import Body from '../../components/body/Body';
import './mainpage.css';

const MainPage = () => {
  return (
    <div className='main-cnt'>
      <NavBar />
      <Body />
    </div>
  );
};

export default MainPage;
