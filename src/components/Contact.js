import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

import img from '../img/icon.jpg';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            alert('Email sent successfully!'); 
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-4 px-6">
            <div className="md:py-4 lg:w-1/3 flex flex-col justify-between">
                <div className="flex flex-col items-center lg:items-start">
                    <p className='text-center font-bold pb-4 md:text-xl py-10'>CONTACT ME</p>
                    <p className="font-bold text-sm md:text-base">Interested in collaborating with me?</p>
                    <p className="font-medium text-sm">Let's turn your ideas into reality!</p>

                    <a href="mailto:fabianodianne@gmail.com" className='md:text-left py-4 text-sm text-primary hover:text-secondary font-semibold flex items-center'>
                        <EmailRoundedIcon className=" pr-1 icon" />
                        fabianodianne@gmail.com
                    </a>
                </div>

                <div className="pt-6 w-full justify-center hidden md:flex">
                    <img src={img} className='animate-bounce rounded-full aspect-square h-48'/>
                </div>

            </div>

            <div className="lg:w-2/3 shadow hover:shadow-md h-fit rounded-xl bg-accent/10 backdrop-blur pt-4 flex flex-col items-center">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="p-4">
                        <input
                            className="rounded-lg w-full p-1 px-2 my-2 shadow focus:outline-none"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />

                        <input
                            className="rounded-lg w-full p-1 px-2 my-2 shadow focus:outline-none"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />

                        <textarea
                            className="rounded-lg w-full p-2 my-2 shadow focus:outline-none min-h-36 scroll-message"
                            name="message"
                            placeholder="Message"
                            required
                        ></textarea>

                        <div className="md:text-base text-sm my-2 px-1 py-0.5 w-fit h-fit rounded-xl font-semibold bg-primary text-light hover:bg-secondary hover:shadow-md flex items-center">
                            <SendRoundedIcon className="py-1 pl-1" />
                            <input type="submit" value="Send" className="pr-2"/>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;