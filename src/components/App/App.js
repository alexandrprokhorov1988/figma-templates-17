import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Collection from '../Collection/Collection';
import Registration from '../Registration/Registration';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header/>
      <main className="content">
        <Intro/>
        <Collection/>
        <Registration/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
