import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Rohith Srinivas</h1>
      <h2 className="text-2xl text-gray-600 mb-6">Software Engineer</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        I’m a software engineer with a passion for building efficient and
        impactful solutions. Skilled in React, Node.js, and C++, I specialize in
        creating dynamic web applications and performance-focused systems. Apart
        from coding, I’m a dedicated gamer who loves diving into immersive
        worlds, unraveling complex strategies, and embracing the teamwork that
        gaming fosters. This passion for gaming fuels my creativity and
        problem-solving mindset, both in and out of development. Let’s
        collaborate and bring great ideas to life!
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/rohsr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com/in/rohiths98"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:rohith.srinvas1998@gmail.com"
          className="text-gray-600 hover:text-gray-800"
        >
          <Mail size={24} />
        </a>
      </div>
    </section>
  );
}
