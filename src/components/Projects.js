import Goldy from '../img/projects/goldy1.png';
import Ascension from '../img/projects/ascension.png';

import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    return (
        <div>
            <p className='text-center font-bold pb-4 md:text-xl py-10'>RECENT PROJECTS</p>
            <div className='gap-4 flex lg:flex-row flex-col px-6'>
                <div className="bg-white/20 backdrop-blur rounded-lg xl:p-10 px-4 py-5 h-fit text-sm shadow minizoom">
                    <p>
                        <span className='font-semibold'>Goldy</span>
                        <br />
                        An NLP-Based Chatbot for English Learning in Elementary Education
                    </p>

                    <div className='py-4'>
                        <img src={Goldy} alt='Goldy: An NLP-Based Chatbot for English Learning in Elementary Education' className='rounded-lg shadow' />
                    </div>

                    <p className='px-2 text-balance'>
                        Goldy is an interactive chatbot tailored for elementary students to enhance their English language skills. Harnessing advanced Natural Language Processing (NLP) techniques, this platform offers an engaging learning experience. Designed to be intuitive and playful, Goldy fosters language development in young learners.
                    </p>
                    <br />
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
                </div> {/* goldy */}

                <div className="bg-white/20 backdrop-blur rounded-lg xl:p-10 px-4 py-5 h-fit text-sm shadow minizoom">
                    <p>
                        <span className='font-semibold'>Ascension</span>
                        <br />
                        Gamification of Academic Programs
                    </p>

                    <div className='py-4'>
                        <img src={Ascension} alt='Ascension: Gamification of Academic Programs' className='rounded-lg shadow' />
                    </div>

                    <p className='px-2 text-balance'>
                        Ascension is a web-based project that gamifies academic programs, using badges, points, and leaderboards to encourage positive behaviors and foster collaborative learning among students. By incorporating game mechanics, it aims to boost engagement and motivation within university activities.
                    </p>
                    <br />
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
                </div> {/* ascension */}

                <div className="bg-white/20 backdrop-blur rounded-lg xl:p-10 px-4 py-5 h-fit text-sm shadow minizoom">
                    <p>
                        <span className='font-semibold'>Braille-to-Audio Translation Glove</span>
                    </p>
                    <br />
                    <p className='px-2 text-balance'>
                        An innovative glove that translates Grade 2 Braille into spoken audio using Python, Raspberry Pi 4B, and slot sensors. By interpreting tactile input, it generates real-time audio feedback, empowering the deaf-mute community to communicate effectively.
                    </p>
                    <br />
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
                </div> {/* braille */}
            </div>
        </div>
    );
};

export default Projects;