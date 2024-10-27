"use client";

import React, { useState, useEffect, useRef } from 'react';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(getTheme());
  const loadingRef = useRef<HTMLDivElement>(null);

function getTheme(): boolean {
  if (typeof window !== 'undefined') {  // Check if 'window' is available (only in browser)
    const storedTheme = localStorage.getItem('dark');
    if (storedTheme) {
      return JSON.parse(storedTheme);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;  // Default to light mode in non-browser environments (e.g., SSR)
}


  // This function sets the theme in localStorage
  function setTheme(value: boolean) {
    localStorage.setItem('dark', JSON.stringify(value));
  }

  // Toggles the theme between dark and light mode
//   const toggleTheme = () => {
//     setIsDark((prev) => {
//       const newTheme = !prev;
//       setTheme(newTheme);
//       return newTheme;
//     });
//   };

  useEffect(() => {
    if (loadingRef.current) {
      loadingRef.current.classList.add('hidden');
    }
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Loading screen */}
      <div
        ref={loadingRef}
        className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-black bg-opacity-90"
      >
        Loading.....
      </div>

      {/* Main content */}
      <main
        aria-labelledby="pageTitle"
        className="flex items-center justify-center h-screen bg-[#02162f] dark:text-light"
      >
        <div className="p-4 space-y-4">
          <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
            <p className="font-semibold text-red-500 text-9xl dark:text-red-600">404</p>
            <div className="space-y-2">
              <h1 id="pageTitle" className="flex items-center space-x-2">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-red-500 dark:text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-xl font-medium text-gray-500 sm:text-2xl dark:text-light">
                  Oops! Page not found.
                </span>
              </h1>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                The page you are looking for was not found.
              </p>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                You may return to{' '}
                <a
                  href="https://www.jkoh.dev"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  home page
                </a>{' '}
                or try using the search form.
              </p>
            </div>
          </div>


        </div>
      </main>

      

      {/* Link to full project */}
      <div className="fixed bottom-5 right-5">
        <a
          href="https://www.jkoh.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-red-500 text-white rounded-md shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring"
        >
          See full project
        </a>
      </div>
    </div>
  );
};

export default App;
