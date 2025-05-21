import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

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
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setSelectedPdf(project.pdfPath)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors duration-200"
                  >
                    View PDF
                  </button>
                  <a
                    href={project.pdfPath}
                    download
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-emerald-400 border border-emerald-400 hover:bg-emerald-400/10 rounded-md transition-colors duration-200"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <a
                href={selectedPdf}
                download
                className="p-2 text-gray-600 hover:text-gray-900 bg-white rounded-full shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2 text-gray-600 hover:text-gray-900 bg-white rounded-full shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe
              src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full"
              title="PDF Preview"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 