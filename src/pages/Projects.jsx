import React from "react";
import ProjectCard from "../components/ProjectCard";
import MahaFort from "../assets/mahafort.png";
import WalkInQr from "../assets/walkinqr.png";

const Projects = () => {
    const projects = [
        {
            title: "MahaForts – A web portal for Maharashtra’s Forts",
            techStack: "React.js, Bootstrap, CSS",
            description:
                "Informational portal featuring Maharashtra’s historic forts with fort details, images, and travel info. Fully responsive UI built using React Router and card-based layout.",
            liveLink: "https://themahafort.netlify.app",
            githubLink: "https://github.com/adityag28/MahaFort-Project",
            image: MahaFort,
        },
        {
            title: "WalkInQr – Restaurant Order Management System",
            techStack: "React.js, Tailwind CSS, Redux, Firebase",
            description:
                "Customers scan a QR code at their table to browse a digital menu, place orders, and get real-time updates. Features include Firebase Firestore integration, Redux for state, and role-based login.",
            liveLink: "https://walkinqr.netlify.app",
            githubLink: "https://github.com/adityag28/restaurant-web-app",
            image: WalkInQr,
        },
    ];

    return (
        <section className="min-h-screen px-4 py-10 max-w-6xl mx-auto scroll-mt-20" id="projects">
            <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
