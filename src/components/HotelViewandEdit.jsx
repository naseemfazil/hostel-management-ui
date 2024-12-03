import React, { useEffect, useRef, useState } from 'react';


const HotelViewandEdit = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div>
            <div class="grid grid-cols-2 gap-4 p-4 px-28">
                <div class="flex justify-end ">
                    <img src="https://images.oyoroomscdn.com/uploads/hotel_image/229985/medium/ecwhqwgtlssa.jpg" alt="Example" class="w-1/2 h-45" />
                </div>
                <div class="flex flex-col justify-between">
                    <div className='flex justify-between'>
                        <div>
                            <h4 className='text-lg font-semibold text-gray-800'>Hotel O elegent Residnecy</h4>
                            <p className='text-sm font-light text-gray-600'>Perumbakkam Main Rd, Chennai</p>
                            <p>Free Wifi</p>
                        </div>

                        {/* Dropdown start */}
                        <div>
                            <div className="relative inline-block text-left" ref={dropdownRef}>
                                <button
                                    onClick={toggleDropdown}
                                    className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                >
                                    <svg
                                        className="w-6 h-6 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v.01M12 12v.01M12 18v.01" />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div
                                        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg origin-top-right"
                                    >
                                        <div className="py-1">
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            >
                                                Option 1
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            >
                                                Option 2
                                            </a>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            >
                                                Option 3
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* Dropdown End */}
                    </div>
                    <div className='flex justify-between'>
                        <h4>$45</h4>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HotelViewandEdit;