import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill all the fields.");
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email)) {
            setStatus("Please enter a valid email address.");
            return;
        }

        setStatus("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen px-4 py-10 max-w-4xl mx-auto scroll-mt-10" id="contact">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto space-y-5"
            >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                </p>

                <div>
                    <label htmlFor="name" className="block font-medium mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
                        placeholder="Your full name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blue-500"
                        placeholder="Write your message here..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Send Message
                </button>

                {status && (
                    <p className="mt-3 text-center text-sm text-gray-700">{status}</p>
                )}
            </form>

            <div className="mt-12 max-w-lg mx-auto text-center space-y-4">
                <h2 className="text-xl font-semibold">Connect with me</h2>
                <div className="flex justify-center gap-8 text-blue-600 text-lg">
                    <a
                        href="https://github.com/adityag28"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/adityagaikwad28/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1YXiSBv7q8vNBSNpja0I7YDNddMcxxXgM/view?usp=drive_link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Resume"
                        className="hover:underline"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
