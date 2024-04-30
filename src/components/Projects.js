import Goldy from '../img/projects/goldy1.png';
import Ascension from '../img/projects/ascension.png';
import Braille from '../img/projects/braille.jpg';
import Agrinova from '../img/projects/agrinova.jpg';

import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    return (
        <div>
            <p className='text-center font-bold pb-4 md:text-xl py-10'>RECENT PROJECTS</p>

            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>

                <div className="bg-white/20 backdrop-blur rounded-lg xl:p-4 px-4 py-5 h-full text-sm shadow minizoom flex flex-col justify-between">
                    <div>
                        <p>
                            <span className='font-semibold'>Goldy</span>
                            <br />
                            An NLP-Based Chatbot for English Learning in Elementary Education
                        </p>

                        <div className='py-4'>
                            <img src={Goldy} alt='Goldy: An NLP-Based Chatbot for English Learning in Elementary Education' className='rounded-lg shadow' />
                        </div>

                        <p className='px-2'>
                            Goldy is an interactive chatbot tailored for elementary students to enhance their English language skills. Harnessing advanced Natural Language Processing (NLP) techniques, this platform offers an engaging learning experience. Designed to be intuitive and playful, Goldy fosters language development in young learners.
                        </p>
                    </div>

                    <div>
                        <p className='font-semibold py-2'>Technologies</p>
                        <div className='flex flex-wrap gap-1 mono text-xs'>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>HTML</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Flask</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Tailwind CSS</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>JavaScript</div>
                        </div>
                        <br />
                        <a
                            href='https://github.com/fabianodianne/goldy'
                            className='font-medium flex items-center w-fit pr-1 rounded-lg border hover:text-primary hover:border-primary shadow hover:shadow-md'
                        >
                            <GitHubIcon className='p-1' />
                            Github
                        </a>
                    </div>
                </div> {/* goldy */}

                <div className="bg-white/20 backdrop-blur rounded-lg xl:p-4 px-4 py-5 h-full text-sm shadow minizoom flex flex-col justify-between">
                    <div>
                        <p>
                            <span className='font-semibold'>Ascension</span>
                            <br />
                            Gamification of Academic Programs
                        </p>

                        <div className='py-4'>
                            <img src={Ascension} alt='Ascension: Gamification of Academic Programs' className='rounded-lg shadow' />
                        </div>

                        <p className='px-2'>
                            Ascension is a web-based project that gamifies academic programs, using badges, points, and leaderboards to encourage positive behaviors and foster collaborative learning among students. By incorporating game mechanics, it aims to boost engagement and motivation within university activities.
                        </p>
                    </div>

                    <div>
                        <p className='font-semibold py-2'>Technologies</p>
                        <div className='flex flex-wrap gap-1 mono text-xs'>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Vue</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>HTML</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Tailwind CSS</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>JavaScript</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>MongoDB</div>
                        </div>
                        <br />
                        <a
                            href='https://github.com/fabianodianne/GAP'
                            className='font-medium flex items-center w-fit pr-1 rounded-lg border hover:text-primary hover:border-primary shadow hover:shadow-md'
                        >
                            <GitHubIcon className='p-1' />
                            Github
                        </a>
                    </div>
                </div> {/* ascension */}

                <div className="bg-white/20 backdrop-blur rounded-lg xl:p-4 px-4 py-5 h-full text-sm shadow minizoom flex flex-col justify-between">
                    <div>
                        <p>
                            <span className='font-semibold'>Smart Plant Watering System</span>
                        </p>

                        <div className='py-4'>
                            <img src={Agrinova} alt='Smart Plant Watering System' className='rounded-lg shadow' />
                        </div>

                        <p className='px-2'>
                            A Smart Plant Watering System that enables remote monitoring and control of plant conditions for optimal growth and water conservation. Users can monitor and control temperature, humidity, soil moisture, and water levels via the Blynk app. The system intelligently waters plants based on real-time environmental data, prioritizing efficient water usage.
                        </p>
                    </div>

                    <div>
                        <p className='font-semibold py-2'>Technologies</p>
                        <div className='flex flex-wrap gap-1 mono text-xs'>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>C++</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Arduino Uno R3</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>NodeMCU</div>
                        </div>
                        <br />
                        <a
                            href='https://github.com/fabianodianne/arduino-iot-farm'
                            className='font-medium flex items-center w-fit pr-1 rounded-lg border hover:text-primary hover:border-primary shadow hover:shadow-md'
                        >
                            <GitHubIcon className='p-1' />
                            Github
                        </a>
                    </div>
                </div> {/* Agrinova */}
                
                <div className="bg-white/20 backdrop-blur rounded-lg xl:p-4 px-4 py-5 h-full text-sm shadow minizoom flex flex-col justify-between">
                    <div>
                        <p>
                            <span className='font-semibold'>Braille-to-Audio Translation Glove</span>
                        </p>

                        <div className='py-4'>
                            <img src={Braille} alt='Braille-to-Audio Translation Glove' className='rounded-lg shadow' />
                        </div>

                        <p className='px-2'>
                            An innovative glove that translates Grade 2 Braille into spoken audio using Python, Raspberry Pi 4B, and slot sensors. By interpreting tactile input, it generates real-time audio feedback, empowering the deaf-mute community to communicate effectively.
                        </p>
                    </div>

                    <div>
                        <p className='font-semibold py-2'>Technologies</p>
                        <div className='flex flex-wrap gap-1 mono text-xs'>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Python</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Raspberry Pi 4B</div>
                            <div className='bg-accent/30 rounded-xl px-2 py-0.5 w-fit hover:font-medium hover:shadow'>Slot Sensors</div>
                        </div>
                        <br />
                        <a
                            href='https://github.com/fabianodianne/braille-to-audio'
                            className='font-medium flex items-center w-fit pr-1 rounded-lg border hover:text-primary hover:border-primary shadow hover:shadow-md'
                        >
                            <GitHubIcon className='p-1' />
                            Github
                        </a>
                    </div>
                </div> {/* braille */}
            </div>
        </div>
    );
};

export default Projects;