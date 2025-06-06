'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

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
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div 
                key={`project-${index}`}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48 sm:h-64 bg-gray-700">
                  <Image
                    src={project.previewPath}
                    alt={`Preview of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain bg-gray-800"
                    priority
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">{project.title}</h2>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={`tech-${techIndex}`}
                        className="px-2 sm:px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.pdfPath}
                    className="inline-block bg-emerald-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-300 text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects; 