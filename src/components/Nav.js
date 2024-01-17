import React, { useState, useEffect } from 'react';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('0');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['0', '1', '2', '3'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const currentSection = document.getElementById(section);
        if (currentSection && scrollPosition >= currentSection.offsetTop && scrollPosition < currentSection.offsetTop + currentSection.offsetHeight) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReload = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <div className='flex justify-between items-center px-6 md:px-36 py-1 font-bold sticky top-0 z-50'>
      <div>
        <button onClick={handleReload} className="text-2xl font-serif">D.</button>
      </div>

      <div className='flex md:flex-row gap-3 justify-center'>
        <div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-2xl hover:text-secondary zoom'
          >
              {isMenuOpen ? <CloseRoundedIcon /> : <LunchDiningIcon />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className='flex text-sm w-full md:w-fit absolute top-10 right-0 md:top-0 md:right-44 px-10 md:px-1 md:py-2 md:bg-transparent md:backdrop-blur-0'>
            <ul className='w-full flex flex-col md:flex-row gap-5 rounded-lg px-4 py-4 md:py-1 items-center backdrop-blur bg-white/40 md:bg-transparent'>
              <li className={` ${activeSection === '0' ? 'active' : ''} hover:text-secondary cursor-pointer`}>
                <button onClick={() => scrollToSection('0')}>
                  home
                </button>
              </li>

              <li className={` ${activeSection === '1' ? 'active' : ''} hover:text-secondary cursor-pointer`}>
                <button onClick={() => scrollToSection('1')}>
                  expertise
                </button>
              </li>

              <li className={` ${activeSection === '2' ? 'active' : ''} hover:text-secondary cursor-pointer`}>
                <button onClick={() => scrollToSection('2')}>
                  projects
                </button>
              </li>

              <li className={` ${activeSection === '3' ? 'active' : ''} hover:text-secondary cursor-pointer`}>
                <button onClick={() => scrollToSection('3')}>
                  contact
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Nav;
