import React from "react";

const About = () => {
    return (
        <section className="min-h-screen px-4 sm:px-6 md:px-10 py-10 max-w-5xl mx-auto scroll-mt-20" id="about">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">About Me</h1>

            <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 rounded-2xl space-y-4 text-gray-800 leading-relaxed text-sm sm:text-base">
                <p>
                    Hello! I'm <span className="font-semibold text-blue-600">Aditya Gaikwad</span>, a Frontend Developer with a passion for crafting responsive, user-friendly, and visually engaging interfaces. I specialize in building fast and accessible web applications using modern web technologies like <strong>React.js</strong>, <strong>JavaScript</strong>, and utility-first CSS frameworks such as <strong>Tailwind</strong> and <strong>Bootstrap</strong>.
                </p>

                <p>
                    I enjoy solving real-world problems through code and am always eager to learn and apply new tools and techniques. I thrive in collaborative environments where I can contribute ideas and iterate quickly. My projects reflect a strong focus on both usability and clean code.
                </p>

                <p>
                    Outside of coding, I’m passionate about exploring forts, traveling, and diving into new tech content to grow my skills consistently.
                </p>
            </div>

            <div className="mt-10">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Technical Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {[
                        "HTML",
                        "CSS3",
                        "JavaScript",
                        "React.js",
                        "Redux",
                        "Bootstrap",
                        "Tailwind CSS",
                        "REST API",
                        "Git & GitHub",
                        "Responsive Design",
                        "Accessibility",
                        "Continuous Learning",
                    ].map((skill, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
