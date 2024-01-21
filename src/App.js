import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/LoadingPage';
import Home from './components/Home';
import Navbar from './components/Nav';
import Projects from './components/Projects';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <body className="scrollbar text-dark h-screen w-screen overflow-hidden">
      {isLoading && <Loading />}
      
      {!isLoading && 
        <div className='sections h-full scrollbar overflow-y-scroll overflow-x-hidden'>

          <div className='w-full h-10 absolute top-0 backdrop-blur z-40'></div>

          <Navbar className='pt-10' />

          <section id='0' className='view md:px-36 px-6 flex flex-col justify-center'>
            <Home />
          </section>

          <section id='1' className='view md:px-36 px-6 flex flex-col justify-center'>
            <Expertise />
          </section>

          <section id='2' className='view md:px-36 px-6 flex flex-col justify-center'>
            <Projects />
          </section>

          <section id='3' className='view md:px-36 px-6 py-10 flex flex-col justify-center'>
            <Contact />
          </section>

          <section className='md:px-36 px-6 pt-5 pb-2 bottom-0 border-t border-primary/30'>
            <Footer />
          </section>


        </div>
      }
    </body>
  );
}

export default App;
