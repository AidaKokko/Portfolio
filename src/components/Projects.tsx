import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-400">Projects</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Professional Work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-emerald-500">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Test Project</h3>
            <p className="text-gray-300 mb-4">This is a test project to verify the component is rendering.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-700 text-emerald-400 rounded-full text-sm">
                Test
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 