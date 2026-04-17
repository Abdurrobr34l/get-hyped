import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Layout from './utilities/Layout';

const App = () => {
  return (
    <div>
      <Layout>
        <Navbar />
      </Layout>
      
      <Hero />
    </div>
  );
};

export default App; 