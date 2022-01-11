import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
