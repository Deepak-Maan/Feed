// src/Dropdown.js
import React, { useState } from 'react';

const Dropdown = () => {
    const [selectedColor, setSelectedColor] = useState('#36985');

    const colors = [
        { code: '#36985', label: 'Color 1' },
        { code: '#FF5733', label: 'Color 2' },
        { code: '#33FF57', label: 'Color 3' },
        { code: '#3357FF', label: 'Color 4' }
    ];

    return (
        <div className="relative inline-block text-left">
            <div>
                <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="w-6 h-6 mr-2 inline-block rounded" style={{ backgroundColor: selectedColor }}></span>
                    {selectedColor}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {colors.map((color) => (
                        <button
                            key={color.code}
                            onClick={() => setSelectedColor(color.code)}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full"
                            role="menuitem"
                        >
                            <span className="w-6 h-6 mr-2 inline-block rounded" style={{ backgroundColor: color.code }}></span>
                            {color.code}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
