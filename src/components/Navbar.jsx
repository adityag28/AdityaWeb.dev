import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600">AdityaWeb.dev</h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-blue-600 md:hidden focus:outline-none text-2xl"
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>

                <div
                    className={`flex-col md:flex md:flex-row md:gap-8 absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${isOpen ? 'flex' : 'hidden'
                        }`}
                >
                    {['home', 'about', 'projects', 'contact'].map((link, index) => (
                        <a
                            key={index}
                            href={`#${link}`}
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 hover:text-blue-600 text-center"
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
