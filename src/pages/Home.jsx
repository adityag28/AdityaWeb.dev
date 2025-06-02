import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfilePic from "../assets/Profile.png"
const Home = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center mt-15 py-8 px-4 scroll-mt-24 mb-6 gap-10" id='home'>
            <img
                alt='profile-picture'
                src={ProfilePic}
                className='rounded-b-full w-40 h-56 md:w-60 md:h-80 md:mr-10 md:ml-10 mt-10'
            />

            <div className='flex flex-col justify-center items-center text-center p-2'>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    Hello I'm Aditya Gaikwad
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-600 mb-6">
                    Frontend Developer
                </h2>
                <p className="text-gray-600 max-w-xl text-sm sm:text-base">
                    Crafting responsive, clean, and modern UIs. Passionate about building real-world applications using React.js and modern web tools.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                        href="#projects"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition text-sm"
                    >
                        💼 View Projects
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1YXiSBv7q8vNBSNpja0I7YDNddMcxxXgM/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-50 transition text-sm"
                    >
                        📄 Download Resume
                    </a>
                </div>

                <div className="flex gap-6 mt-6 text-blue-700 text-2xl">
                    <a href="https://github.com/adityag28" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/adityagaikwad28/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
        </section>
    );
};

export default Home;
