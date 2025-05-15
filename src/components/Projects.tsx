import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  pdfUrl?: string;
}

const projects: Project[] = [
  {
    title: "Lahjojen Maailma Wireframe",
    description: "A comprehensive wireframe design for an e-commerce platform, showcasing user interface and user experience planning.",
    imageUrl: "/project/Lahjojen Maailma_Wireframe (Final).pdf",
    technologies: ["Figma", "UI/UX Design", "Wireframing"],
    pdfUrl: "/project/Lahjojen Maailma_Wireframe (Final).pdf"
  },
  {
    title: "Buyer Persona Analysis",
    description: "Detailed buyer persona analysis including both new and returning customer profiles, helping to understand target audience behavior and preferences.",
    imageUrl: "/project/New Buyer Persona.pdf",
    technologies: ["Market Research", "User Research", "Persona Development"],
    pdfUrl: "/project/New Buyer Persona.pdf"
  },
  {
    title: "Operations Work Cycle",
    description: "A comprehensive documentation of operational workflows and processes, demonstrating efficient business operations management.",
    imageUrl: "/project/Operations Work Cycle.pdf",
    technologies: ["Process Documentation", "Operations Management", "Workflow Design"],
    pdfUrl: "/project/Operations Work Cycle.pdf"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-400">Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional Work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-emerald-500"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-emerald-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      View PDF →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 