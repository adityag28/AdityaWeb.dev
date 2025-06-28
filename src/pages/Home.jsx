import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfilePic from '../assets/Profile.png';

const Home = () => {
    return (
        <section
            className="flex flex-col md:flex-row items-center justify-center mt-10 py-10 px-4 scroll-mt-24 mb-6 gap-10"
            id="home"
        >
            <img
                alt="profile"
                src={ProfilePic}
                className="rounded-b-full w-36 h-52 sm:w-40 sm:h-56 md:w-60 md:h-80 md:mr-10 md:ml-10 mt-6 sm:mt-10"
            />

            <div className="flex flex-col justify-center items-center text-center p-2 max-w-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">
                    Hi, I'm Aditya Gaikwad 👋
                </h1>

                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                    Frontend Developer skilled in <strong>React.js, Firebase, Tailwind CSS</strong>, and passionate about building user-friendly, responsive web applications.
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
                    <a href="https://github.com/adityag28" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/adityagaikwad28/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
