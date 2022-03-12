import React from 'react';
import Slide from 'react-reveal/Slide';
import './Header.css';

const Header = () => {
    return (
        <section class="background">
            <div class="max-w-screen-xl mx-auto">
                <div class="p-10 pt-20 text-gray-900">
                <Slide bottom duration={2000}>
                        <div class="">
                            <div class="w-8/12 text-center mx-auto">
                                <h1 class="text-6xl leading-tight uppercase text-gray-200 py-7 tracking-tight">Hello, <span class="text-pink-600 block">I'm Arnob Chakma</span ></h1>
                                <h4 class="text-2xl text-gray-200 mb-10">As a front-end developer</h4>
                            </div>

                            {/* Button part */}
                            <div class="w-8/12 mx-auto grid grid-rows-2 md:flex gap-8 md:gap-10">
                                <div class="mx-auto">
                                    <button class="flex rounded text-gray-200 text-lg px-16 py-5 transform duration-300 bg-pink-600 hover:bg-pink-500 hover:text-gray-900">
                                        <a class="pr-3 uppercase text-sm" target="_blank" href="https://drive.google.com/uc?export=download&amp;id=1tCbGlK1deWIneCCLjukzuOLzkpgBdCZq">Download Resume</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
};

export default Header;