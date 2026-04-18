import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Layout from './utilities/Layout';
import About from './components/About/About';
import Expertises from './components/Experties/Expertises';

const App = () => {
  return (
    <div>
      <Layout>
        <Navbar />
      </Layout>

      <Hero />

      <Layout>
        <About />
        <Expertises/>

        <h2 className='mt-40'>lorem</h2>
      </Layout>
    </div>
  );
};

export default App; 