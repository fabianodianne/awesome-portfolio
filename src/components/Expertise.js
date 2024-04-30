
const Expertise = () => {
    return (
        <div className="flex flex-col h-full py-10 gap-10">
            
            <p className="font-bold md:text-xl px-10 ">
                My expertise lies in...
            </p>

            <div className="grid lg:grid-cols-3 gap-4 xl:px-32 px-5">
                <div className="px-6 py-4 shadow hover:shadow-md rounded-xl flex flex-col bg-white/30 backdrop-blur">
                    <p className='font-bold text-base'>
                        Web Development
                    </p>
                    <p className='px-2 text-sm font-medium'>
                        I create engaging and interactive online experiences, blending aesthetic appeal with functional excellence. I'm dedicated to delivering web solutions that exceed expectations.
                    </p>
                </div>

                <div className="px-6 py-4 shadow hover:shadow-md rounded-xl flex flex-col bg-white/30 backdrop-blur">
                    <p className='font-bold text-base'>
                        Custom Software Solutions
                    </p>
                    <p className='px-2 text-sm font-medium'>
                        I create customized software solutions, from robust backend systems to intricate algorithms. My focus is on delivering efficient, scalable, and innovative solutions that are highly accurate and effective.
                    </p>
                </div>

                <div className="px-6 py-4 shadow hover:shadow-md rounded-xl flex flex-col bg-white/30 backdrop-blur">
                    <p className='font-bold text-base'>
                        Mobile App Development
                    </p>
                    <p className='px-2 text-sm font-medium'>
                        My passion extends to mobile app development using Flutter. This versatile framework allows me to seamlessly merge creativity and functionality, delivering captivating and high-performance cross-platform applications for Android and iOS.
                    </p>
                </div>

            </div>

            <div className='p-4 xl:mx-32 mx-5 shadow hover:shadow-md rounded-xl flex flex-col bg-secondary/10'>
                <p className='font-black text-xl text-center mb-6'>Tech Stack</p>
            

                <div className='flex flex-wrap gap-3 justify-center'>
                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div className="icons8-html-5"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-css3"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-js"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-tailwind-css"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-react"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-flutter"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-mysql-logo"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-firebase"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-vs-code"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-figma"></div>
                    </div>

                    <div className="bg-white/40 hover:bg-accent/10 rounded-xl px-6 py-1 flex justify-center items-center">
                        <div class="icons8-github"></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Expertise;