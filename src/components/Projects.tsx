import React from 'react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      title: "Lahjojen Maailma Wireframe",
      description: "A comprehensive wireframe design for Lahjojen Maailma, showcasing the user interface and experience flow.",
      technologies: ["UI/UX Design", "Wireframing", "User Flow"],
      pdfPath: "/project/Lahjojen Maailma_Wireframe (Final).pdf",
      previewPath: "/images/project-previews/wireframe-preview.jpg"
    },
    {
      title: "Operations Work Cycle",
      description: "Detailed documentation of operational workflows and processes, ensuring efficient business operations.",
      technologies: ["Process Documentation", "Operations Management", "Workflow Analysis"],
      pdfPath: "/project/Operations Work Cycle.pdf",
      previewPath: "/images/project-previews/operations-preview.jpg"
    },
    {
      title: "Returning Buyer Persona",
      description: "Detailed analysis and persona development for returning customers, focusing on user behavior and preferences.",
      technologies: ["User Research", "Persona Development", "Customer Analysis"],
      pdfPath: "/project/Returning Buyer Persona.pdf",
      previewPath: "/images/project-previews/returning-buyer-preview.jpg"
    },
    {
      title: "New Buyer Persona",
      description: "Comprehensive study of new customer segments, their needs, and how to effectively engage with them.",
      technologies: ["Market Research", "User Segmentation", "Customer Journey"],
      pdfPath: "/project/New Buyer Persona.pdf",
      previewPath: "/images/project-previews/new-buyer-preview.jpg"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-400">Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional Work
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={`project-${index}`}
                className="relative flex flex-col gap-y-3 rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-sm hover:shadow-md transition-all hover:border-emerald-500"
              >
                <h3 className="text-lg font-semibold leading-6 text-emerald-400">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={`tech-${techIndex}`}
                      className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors duration-200"
                >
                  View PDF
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 