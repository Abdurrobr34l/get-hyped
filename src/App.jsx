import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Layout from './utilities/Layout';
import About from './components/About/About';

const App = () => {
  return (
    <div>
      <Layout>
        <Navbar />
      </Layout>

      {/* <Hero /> */}

      <Layout>
        <About />
      </Layout>
    </div>
  );
};

export default App; 