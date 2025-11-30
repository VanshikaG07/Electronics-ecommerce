import React from 'react';

const NotFound = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">We are currently working on it</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">This feature is coming soon.</p>
        <a href="/" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Go Home
        </a>
    </div>
);

export default NotFound;
