import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
      </main>
    </>
  );
};

export default HomeScreen;
