
import React, { useState, useEffect } from 'react';

import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';

import avatar from '../img/avatar.png';

const About = () => {
    const [activeSection, setActiveSection] = useState('0');

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
        <div className="h-fit pt-12">
            <p className='text-4xl title font-extrabold text-center'>about me</p>
            <div className='grid md:grid-cols-2 gap-4'>
                <div className='flex flex-col gap-2 justify-center'>
                    <p className='md:text-2xl text-xl font-semibold'>Hey there! I'm
                        <span className='text-primary font-bold md:text-2xl'>
                            <span className='hover:text-secondary hover:font-bold'> D</span>
                            <span className='hover:text-secondary hover:font-bold'>i</span>
                            <span className='hover:text-secondary hover:font-bold'>a</span>
                            <span className='hover:text-secondary hover:font-bold'>n</span>
                            <span className='hover:text-secondary hover:font-bold'>n</span>
                            <span className='hover:text-secondary hover:font-bold'>e</span>
                        </span>.
                    </p>
                    <p className='md:text-lg text-base'>I love creating elegant web experiences and captivating interfaces.</p>

                    <button onClick={() => scrollToSection('3')} className='flex font-medium text-primary hover:text-secondary'>
                        <KeyboardDoubleArrowRightRoundedIcon className='pb-1' />
                        <p>Let's collaborate!</p>
                    </button>
                </div>

                {/* <div>
                    <img src={avatar} alt='Dianne Fabiano Animation' className='animate-bounce px-2 md:p-20' />
                </div> */}
            </div>

        </div>
    );
}

export default About;