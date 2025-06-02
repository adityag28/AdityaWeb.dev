import React from "react";

const ProjectCard = ({ title, techStack, description, liveLink, githubLink, image }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border mx-auto w-full max-w-md">
            <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-3">
                <h2 className="text-lg sm:text-xl font-semibold text-blue-600">{title}</h2>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{techStack}</p>
                <p className="text-sm text-gray-700">{description}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                    >
                        Live Demo
                    </a>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50 transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
