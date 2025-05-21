import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const projects = [
    {
      title: 'Operations Management',
      description: 'A comprehensive analysis of operations management processes and improvements.',
      technologies: ['Process Analysis', 'Workflow Optimization', 'Documentation'],
      pdfPath: '/project/Operations%20Management.pdf',
      previewPath: '/images/project-previews/operations-preview.jpg'
    },
    {
      title: 'Wireframe Design',
      description: 'UI/UX wireframe designs for a mobile application interface.',
      technologies: ['Figma', 'UI Design', 'User Experience'],
      pdfPath: '/project/Wireframe%20Design.pdf',
      previewPath: '/images/project-previews/wireframe-preview.jpg'
    },
    {
      title: 'Returning Buyer Persona',
      description: 'Detailed analysis of returning buyer behavior and preferences.',
      technologies: ['Market Research', 'User Behavior', 'Data Analysis'],
      pdfPath: '/project/Returning%20Buyer%20Persona.pdf',
      previewPath: '/images/project-previews/returning-buyer-preview.jpg'
    },
    {
      title: 'New Buyer Persona',
      description: 'Comprehensive study of new buyer demographics and motivations.',
      technologies: ['Market Research', 'User Behavior', 'Data Analysis'],
      pdfPath: '/project/New%20Buyer%20Persona.pdf',
      previewPath: '/images/project-previews/new-buyer-preview.jpg'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-emerald-400">Projects</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Work
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            A collection of my professional projects and case studies.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="flex flex-col bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-700 hover:border-emerald-500 overflow-hidden"
              >
                <div className="relative h-64 w-full bg-gray-800">
                  <Image
                    src={project.previewPath}
                    alt={project.title}
                    fill
                    className="object-contain p-6"
                    quality={100}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-900 text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedPdf(project.pdfPath)}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors duration-200"
                  >
                    View PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">PDF Preview</h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="flex-grow p-4">
              <iframe
                src={selectedPdf}
                className="w-full h-full rounded-lg"
                title="PDF Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 