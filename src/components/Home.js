
import React, { useState, useEffect } from 'react';

import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import img from '../img/avatar.png';
const name = "IANNE FABIANO";

const Home = () => {
    const [activeSection, setActiveSection] = useState('0');

    const [dipslayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (currentIndex <= name.length) {
                setDisplayText(name.slice(0, currentIndex));
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(typingInterval);
            }
        }, 300)
        return () => clearInterval(typingInterval);
    }, [currentIndex]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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

    return (
        <div className='flex lg:flex-row flex-col justify-center'>

            <div className='lg:w-2/3 lg:pr-48 gap-2 flex flex-col justify-end'>
                <p className='xl:text-base text-sm font-medium px-6 lg:px-1'>
                    Hey there! I'm
                </p>

                <p className='font-bold xl:text-6xl text-2xl'>D{dipslayText}
                    <span className='animate-pulse'>_</span>
                </p>

                <p className='xl:text-base text-sm font-medium px-6 lg:px-1'>
                    I'm a 

                    <span className='font-bold'>
                        <span className='hover:text-secondary'> s</span>
                        <span className='hover:text-secondary'>o</span>
                        <span className='hover:text-secondary'>f</span>
                        <span className='hover:text-secondary'>t</span>
                        <span className='hover:text-secondary'>w</span>
                        <span className='hover:text-secondary'>a</span>
                        <span className='hover:text-secondary'>r</span>
                        <span className='hover:text-secondary'>e </span>
                    </span>

                    <span className='font-bold'>
                        <span className='hover:text-secondary'> e</span>
                        <span className='hover:text-secondary'>n</span>
                        <span className='hover:text-secondary'>g</span>
                        <span className='hover:text-secondary'>i</span>
                        <span className='hover:text-secondary'>n</span>
                        <span className='hover:text-secondary'>e</span>
                        <span className='hover:text-secondary'>e</span>
                        <span className='hover:text-secondary'>r </span>
                    </span>

                     passionate about creating engaging websites, web apps, and mobile apps. Let's turn your ideas into innovative digital solutions!
                </p>

                <button onClick={() => scrollToSection('3')} className='flex text-sm font-medium my-4 text-primary hover:font-bold w-fit'>
                    <KeyboardDoubleArrowRightRoundedIcon className='pb-1' />
                    <p>Let's collaborate!</p>
                </button>

                <div className='flex gap-3'>
                    {/* <a href='https://www.instagram.com/yhianiee' target='_blank' className='hover:text-primary zoom'>
                        <InstagramIcon />
                    </a> */}
                    <a href='mailto:fabianodianne@gmail.com' target='_blank' className='hover:text-primary zoom'>
                        <EmailRoundedIcon />
                    </a>
                    <a href='https://www.linkedin.com/in/dianne-fabiano/' target='_blank' className='hover:text-primary zoom'>
                        <LinkedInIcon />
                    </a>
                    <a href='https://github.com/fabianodianne' target='_blank' className='hover:text-primary zoom'>
                        <GitHubIcon />
                    </a>

                </div>
            </div>

            <div className='lg:w-1/3 px-20 lg:px-10 lg:pt-20'>
                <img src={img} alt='hello' className='animate-bounce' />
            </div>

        </div>
    );
}

export default Home;
