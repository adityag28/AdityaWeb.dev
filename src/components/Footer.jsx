import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiReadCvLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 border-t border-gray-300 py-6">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-600 text-sm text-center md:text-left">
                    &copy; {new Date().getFullYear()} Aditya Gaikwad. All rights reserved.
                </p>

                <div className="flex gap-6 text-blue-600 text-xl justify-center">
                    <a
                        href="https://github.com/adityag28"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:text-blue-800 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adityagaikwad28/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-800 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1YXiSBv7q8vNBSNpja0I7YDNddMcxxXgM/view"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Resume"
                        className="hover:text-blue-800 transition"
                    >
                        <PiReadCvLogoFill />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
