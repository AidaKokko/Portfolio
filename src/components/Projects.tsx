import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      title: 'Operations Work Cycle',
      description: 'Detailed documentation of operational workflows and processes, ensuring efficient business operations.',
      technologies: ['Process Documentation', 'Operations Management', 'Workflow Analysis'],
      pdfPath: '/project/Operations Work Cycle.pdf',
      previewPath: '/images/project-previews/operations-preview.jpg'
    },
    {
      title: 'Lahjojen Maailma Wireframe',
      description: 'A comprehensive wireframe design for Lahjojen Maailma, showcasing the user interface and experience flow.',
      technologies: ['UI/UX Design', 'Wireframing', 'User Flow'],
      pdfPath: '/project/Lahjojen Maailma_Wireframe (Final).pdf',
      previewPath: '/images/project-previews/wireframe-preview.jpg'
    },
    {
      title: 'Returning Buyer Persona',
      description: 'Detailed analysis of returning buyer behavior and preferences.',
      technologies: ['Market Research', 'User Behavior', 'Data Analysis'],
      pdfPath: '/project/Returning Buyer Persona.pdf',
      previewPath: '/images/project-previews/returning-buyer-preview.jpg'
    },
    {
      title: 'New Buyer Persona',
      description: 'Comprehensive study of new buyer demographics and motivations.',
      technologies: ['Market Research', 'User Behavior', 'Data Analysis'],
      pdfPath: '/project/New Buyer Persona.pdf',
      previewPath: '/images/project-previews/new-buyer-preview.jpg'
    }
  ];

  const handlePdfClick = (pdfPath: string) => {
    if (isMobile) {
      // For mobile, use a direct link with inline viewing
      const link = document.createElement('a');
      link.href = pdfPath;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('data-inline', 'true');
      link.setAttribute('type', 'application/pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      setSelectedPdf(pdfPath);
    }
  };

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
                    onClick={() => handlePdfClick(project.pdfPath)}
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

      {/* PDF Preview Modal - Only for desktop */}
      {selectedPdf && !isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">PDF Preview</h3>
              <div className="flex items-center gap-4">
                <a
                  href={selectedPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="application/pdf"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Open in new tab
                </a>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="text-gray-400 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-grow p-4">
              <iframe
                src={`${selectedPdf}#view=FitH`}
                className="w-full h-full rounded-lg bg-white"
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