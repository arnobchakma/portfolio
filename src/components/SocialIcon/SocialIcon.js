import React from 'react';
import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = () => {
    return (
        <div class="fixed bottom-16 right-3 z-40">
            <div>
                <div>
                    <a class="transform duration-300 hover:-translate-y-2" href="http://www.youtube.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 text-gray-200 bg-red-700 p-2" icon={faYoutube}></FontAwesomeIcon></a>
                </div>
                <div class="my-3">
                    <a class="transform duration-300 hover:-translate-y-2" href="https://www.linkedin.com/in/arnob-chakma-21a490155/" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 text-gray-200 bg-sky-700 p-2" icon={faLinkedin}></FontAwesomeIcon></a>
                </div>
                <div>
                    <a class="transform duration-300 hover:-translate-y-2" href="http://www.twitter.com" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 text-gray-200 bg-cyan-600 p-2" icon={faTwitter}></FontAwesomeIcon></a>
                </div>
                <div class="my-3">
                    <a class="transform duration-300 hover:-translate-y-2" href="https://github.com/arnobchakma" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 text-gray-900 bg-gray-400 p-2" icon={faGithub}></FontAwesomeIcon></a>
                </div>
                <div>
                    <a class="transform duration-300 hover:-translate-y-2" href="https://www.facebook.com/" target="_blank" alt="" rel="noreferrer"><FontAwesomeIcon class="w-8 h-8 bg-sky-800 text-gray-200 p-2" icon={faFacebook}></FontAwesomeIcon></a>
                </div>

            </div>
        </div>
    );
};

export default SocialIcon;