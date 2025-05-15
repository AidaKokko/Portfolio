'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const Projects = () => {
  const projects = [
    {
      title: "Lahjojen Maailma Wireframe",
      description: "A comprehensive wireframe design for Lahjojen Maailma, showcasing the user interface and experience flow.",
      technologies: ["UI/UX Design", "Wireframing", "User Flow"],
      pdfPath: "/project/Lahjojen Maailma_Wireframe (Final).pdf",
      thumbnail: "/images/project-thumbnails/wireframe.jpg"
    },
    {
      title: "Returning Buyer Persona",
      description: "Detailed analysis and persona development for returning customers, focusing on user behavior and preferences.",
      technologies: ["User Research", "Persona Development", "Customer Analysis"],
      pdfPath: "/project/Returning Buyer Persona.pdf",
      thumbnail: "/images/project-thumbnails/returning-buyer.jpg"
    },
    {
      title: "New Buyer Persona",
      description: "Comprehensive study of new customer segments, their needs, and how to effectively engage with them.",
      technologies: ["Market Research", "User Segmentation", "Customer Journey"],
      pdfPath: "/project/New Buyer Persona.pdf",
      thumbnail: "/images/project-thumbnails/new-buyer.jpg"
    },
    {
      title: "Operations Work Cycle",
      description: "Detailed documentation of operational workflows and processes, ensuring efficient business operations.",
      technologies: ["Process Documentation", "Operations Management", "Workflow Analysis"],
      pdfPath: "/project/Operations Work Cycle.pdf",
      thumbnail: "/images/project-thumbnails/operations.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.pdfPath}
                    className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-300"
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
      </div>
    </main>
  );
};

export default Projects; 