import React from 'react';
import { Slide } from 'react-reveal';
import skillImage from '../../../../images/skill-image.webp'
import './Skills.css';

const Skills = () => {
    return (
        <section class="skill-background">
            <div class="max-w-screen-xl mx-auto">
                <div class='p-10 pt-28'>

                    {/* Title */}
                    <Slide left duration={2000}>
                        <>
                            <div class="w-full md:w-6/12">
                                <p class="text-gray-300 text-center md:text-left">My specialty</p>
                                <h2 class="text-3xl uppercase text-gray-200 mt-5 text-center md:text-left">My skills</h2>
                                <p class="mt-10 text-2xl text-gray-200 text-center md:text-left">Developing <span class="text-pink-600 ">website</span> for the world of intent is something I'm passionate about and I'm dedicated to making the world of intent easy and affordable for everyone.</p>
                            </div>
                        </>
                    </Slide>

                    {/* Skills */}
                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        {/* left content*/}
                        <Slide left duration={2000}>
                            <>
                                <div class="mt-16 mx-auto">
                                    <img src={skillImage} alt="" />
                                </div>
                            </>
                        </Slide>

                        {/* Right content */}
                        <Slide right duration={2000}>
                            <>
                                <div class="mt-20 text-gray-200">
                                    {/* Javascript part */}
                                    <div>
                                        <div class="skill-title">
                                            <h5>Javascript</h5>
                                            <p>85%</p>
                                        </div>
                                        {/* Skill % */}
                                        <div class="animation-parent">
                                            <div class="relative w-0 h-2 rounded-full bg-pink-600" id="javascript-animation"></div>
                                        </div>
                                    </div>

                                    {/* React part */}
                                    <div class="my-8">
                                        <div class="skill-title">
                                            <h5>React JS</h5>
                                            <p>90%</p>
                                        </div>
                                        {/* Skill % */}
                                        <div class="animation-parent">
                                            <div class="relative w-0 h-2 rounded-full bg-green-600" id="react-animation"></div>
                                        </div>
                                    </div>

                                    {/* Svelte part */}
                                    <div>
                                        <div class="skill-title">
                                            <h5>Svelte</h5>
                                            <p>80%</p>
                                        </div>
                                        {/* Skill % */}
                                        <div class="animation-parent">
                                            <div class="relative w-0 h-2 rounded-full bg-purple-600" id="svelte-animation"></div>
                                        </div>
                                    </div>

                                    {/* Node js */}
                                    <div class="my-8">
                                        <div class="skill-title">
                                            <h5>Node JS</h5>
                                            <p>80%</p>
                                        </div>
                                        {/* Skill % */}
                                        <div class="animation-parent">
                                            <div class="relative w-0 h-2 rounded-full bg-purple-600" id="node-animation"></div>
                                        </div>
                                    </div>

                                    {/* Tailwind css */}
                                    <div>
                                        <div class="skill-title">
                                            <h5>Tailwind CSS</h5>
                                            <p>90%</p>
                                        </div>
                                        {/* Skill % */}
                                        <div class="animation-parent">
                                            <div class="relative w-0 h-2 rounded-full bg-green-600" id="tailwind-animation"></div>
                                        </div>
                                    </div>

                                    {/* My sql */}
                                    <div class="mt-8">
                                        <div class="skill-title">
                                            <h5>My sql</h5>
                                            <p>75%</p>
                                        </div>
                                        {/* Skill % */}
                                        <div class="animation-parent">
                                            <div class="relative w-0 h-2 rounded-full bg-sky-600" id="mySql-animation"></div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;