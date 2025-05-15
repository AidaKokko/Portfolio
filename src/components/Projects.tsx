import React from 'react';

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-emerald-400">Projects</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Professional Work
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col gap-y-2 rounded-lg border border-gray-700 bg-gray-800 px-6 py-5 shadow-sm hover:shadow-md transition-all hover:border-emerald-500">
            <h3 className="text-lg font-semibold leading-6 text-emerald-400">Test Project</h3>
            <p className="text-sm text-gray-300">This is a test project to verify the component is rendering.</p>
            <div className="flex flex-wrap gap-2 mt-2">
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