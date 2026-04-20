import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Layout from './utilities/Layout';
import About from './components/About/About';
import Expertises from './components/Experties/Expertises';
import Work from './components/Work/Work';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';
import useLenis from './Hooks/useLenis';

const App = () => {
  useLenis();

  return (
    <div>
      <Layout>
        <Navbar />
      </Layout>

      <Hero />

      <Layout>
        <About />
        <Expertises />
        <Work />
      </Layout>

      <Brands />

      <Footer/>
    </div>
  );
};

export default App;