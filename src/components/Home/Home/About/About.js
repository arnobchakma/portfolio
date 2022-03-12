import React from 'react';
import { Zoom } from 'react-reveal';
import image from '../../../../images/personal-image.jpg';
import './About.css';

const About = () => {
    return (
        <section>
            <div class="max-w-screen-xl mx-auto">
                <div class='p-10 pt-28'>

                    {/* Content wrapper */}
                    <div class="grid md:grid-cols-2 gap-6 items-center">
                        {/* left content */}
                        <Zoom duration={2000}>
                            <div>
                                <div>
                                    <h4 class="text-gray-600 text-center md:text-left">About Me</h4>
                                    <h1 class="text-3xl text-gray-900 py-8 uppercase text-center md:text-left">My specialization</h1>
                                    <p class="text-black leading-tight font-semibold text-4xl text-center md:text-left">I’m a <span class="uppercase text-3xl text-pink-600">front-end web developer.</span> Strong proficiency in JavaScript, React, Svelte, TailwindCss, and others.</p>
                                    <h1 class="text-lg text-pink-600 font-medium text-black uppercase py-12 text-center md:text-left">2 Years working experience</h1>
                                </div>
                                <div>
                                    <button class="flex rounded items-center p-3 text-gray-200 px-8 transform duration-300 bg-pink-600 hover:bg-pink-500 hover:text-gray-900 mx-auto md:mx-0">
                                        <span class="pr-3 uppercase text-sm"> Hire me </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Zoom>

                        {/* Right content */}
                        <Zoom duration={2000}>
                            <div>
                                <img class="shadow-xl pt-10 md:pt-0 mx-auto" src={image} alt="" />
                            </div>
                        </Zoom>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;