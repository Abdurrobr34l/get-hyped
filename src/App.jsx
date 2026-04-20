import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Layout from './utilities/Layout';
import About from './components/About/About';
import Expertises from './components/Experties/Expertises';
import Work from './components/Work/Work';

const App = () => {
  return (
    <div>
      <Layout>
        {/* <Navbar /> */}
      </Layout>

      {/* <Hero /> */}

      <Layout>
        {/* <About /> */}
        {/* <Expertises/> */}
        <Work/>
      </Layout>
    </div>
  );
};

export default App; 