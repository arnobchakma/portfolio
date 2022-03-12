import React from 'react';
import { Link } from 'react-router-dom';
// import './Project.css';

const Project = () => {

    return (
        <section class="project-background">
            <div class="max-w-screen-xl mx-auto">
                <div class='p-10 pt-28'>
                    <div>
                        <h5 class="text-gray-600 text-center md:text-left">My work</h5>
                        <h1 class="text-3xl text-gray-800 uppercase py-5 text-center md:text-left">Recent work</h1>
                    </div>
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-20">
                        <div class="single-project bg-green-600 hover:bg-green-900 border-4 border-green-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <h3 class="border-b-2 border-white mb-5">Full Stack Project</h3>
                                <p class="paragraph">It's a e-commerce website. There are two admin panels. One is for user and the other is for admin. If the user wants, he can review his order</p>
                            </div>
                            <div class="flex justify-center text-gray-900 pt-5">
                                <Link class="bg-green-400 px-4 py-1 rounded transform duration-300 hover:bg-green-600 hover:text-gray-200" to="/">Live Link</Link>
                            </div>
                        </div>

                        <div class="single-project bg-purple-600 hover:bg-purple-900 border-4 border-purple-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-200 mx-auto" fill="none" viewBox="0   0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                                <h3 class="border-b-2 border-white mb-5">React Project</h3>
                                <p class="paragraph">This website has been created to provide various travel services. You can reach your destination by signing in with Google and choosing where you want</p>
                            </div>
                            <div class="flex justify-center text-gray-900 pt-5">
                                <Link class="bg-purple-400 px-4 py-1 rounded transform duration-300 hover:bg-purple-600 hover:text-gray-200" to="/">Live Link</Link>
                            </div>
                        </div>

                        <div class="single-project bg-sky-600 hover:bg-sky-900 border-4 border-sky-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <h3 class="border-b-2 border-white mb-5">React Project</h3>
                                <p class="paragraph">In this porject there are different types of computer Products here. When the users click on buy now button he will be asked to login with google</p>
                            </div>
                            <div class="flex justify-center text-gray-900 pt-5">
                                <Link class="bg-sky-400 px-4 py-1 rounded transform duration-300 hover:bg-sky-600 hover:text-gray-200" to="/">Live Link</Link>
                            </div>
                        </div>

                        <div class="single-project bg-pink-600 hover:bg-pink-900 border-4 border-pink-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                <h3 class="border-b-2 border-white mb-5">React Project</h3>
                                <p class="paragraph">It's a e-commerce website. There are two admin panels. One is for user and the other is for admin. If the user wants, he can review his order.</p>
                            </div>
                            <div class="flex justify-center text-gray-900 pt-5">
                                <Link class="bg-pink-400 px-4 py-1 rounded transform duration-300 hover:bg-pink-600 hover:text-gray-200" to="/">Live Link</Link>
                            </div>
                        </div>

                        <div class="single-project bg-teal-600 hover:bg-teal-900 border-4 border-teal-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                <h3 class="border-b-2 border-white mb-5">React Project</h3>
                                <p class="paragraph">It's a e-commerce website. There are two admin panels. One is for user and the other is for admin. If the user wants, he can review his order.</p>
                            </div>
                            <div class="flex justify-center text-gray-900 pt-5">
                                <Link class="bg-teal-400 px-4 py-1 rounded transform duration-300 hover:bg-teal-600 hover:text-gray-200" to="/">Live Link</Link>
                            </div>
                        </div>

                        <div class="single-project bg-indigo-600 hover:bg-indigo-900 border-4 border-indigo-500">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-200 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                <h3 class="border-b-2 border-white mb-5">React Project</h3>
                                <p class="paragraph">It's a e-commerce website. There are two admin panels. One is for user and the other is for admin. If the user wants, he can review his order.</p>
                            </div>
                            <div class="flex justify-center text-gray-900 pt-5">
                                <Link class="bg-indigo-400 px-4 py-1 rounded transform duration-300 hover:bg-indigo-600 hover:text-gray-200" to="/">Live Link</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;