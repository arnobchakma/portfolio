import React from 'react';
import { Slide } from 'react-reveal';
import './Contact.css';

const Contact = () => {

    // Handling email sender
    const sendEmail = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <section class="contact-background">
            <div class="max-w-screen-xl mx-auto">
                <div class='p-10 pt-28'>
                    <Slide bottom delay={1000} duration={2000}>
                        <div>
                            <h5 class="text-gray-400 text-center md:text-left">The universe is a pretty big place. If it's just us.</h5>
                            <h1 class="text-3xl text-gray-200 uppercase tracking-widest py-5 text-center md:text-left">Contact</h1>
                        </div>
                    </Slide>

                    {/* Content wrapper */}
                    <div class="grid lg:grid-cols-2 gap-6 pt-16">
                        {/* Left Content */}
                        <Slide bottom duration={2000}>
                            <div class="mx-auto md:mx-0">
                                <div class="flex items-center gap-8">
                                    <div class="bg-gray-700 p-7 "><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                    </svg></div>
                                    <p class="text-gray-300">arnobchakma05@gmail.com</p>
                                </div>

                                <div class="flex items-center gap-8 my-7">
                                    <div class="bg-gray-700 p-7 "><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg></div>
                                    <p class="text-gray-300">Baridhara, J-block, Road-3 <span class="block">Dhaka 1212</span></p>

                                </div>

                                <div class="flex items-center gap-8">
                                    <div class="bg-gray-700 p-7 "><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg></div>
                                    <p class="text-gray-300">01591147295</p>
                                </div>
                            </div>
                        </Slide>

                        {/* Right Side Form */}
                        <Slide top duration={2000}>
                            <div>
                                <form onSubmit={sendEmail} >
                                    <div class="text-gray-100 mx-auto">
                                        <div className="input-form">
                                            <input type="text" className="form-control bg-gray-700 w-full h-14 p-5 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Name" name="full-name" required />
                                        </div>

                                        <div className="input-form py-7">
                                            <input type="email" className="form-control bg-gray-700 h-14 w-full p-5 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" placeholder="Email" name="email" required />
                                        </div>

                                        <div className="text-area">
                                            <textarea className="form-control bg-gray-700 w-full p-5 border-none border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-700 focus:ring-1" id="" rows="5" placeholder="Message" name="Message" required></textarea>
                                        </div>

                                        <div className="mt-7 text-center md:text-left">
                                            <button type="submit" className="text-gray-200 tracking-widest cursor-pointer px-7 h-12 uppercase transform duration-300 bg-pink-600 hover:bg-pink-800 hover:text-gray-200 mb-10">
                                                Contact Me
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;