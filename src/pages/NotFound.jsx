import React from 'react';

const NotFound = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
        <a href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Go Home
        </a>
    </div>
);

export default NotFound;
