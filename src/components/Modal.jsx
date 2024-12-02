import React, { useEffect } from 'react';
import '../styles/_modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        // Prevent background scroll when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out"
            style={{ animation: 'fadeIn 0.3s ease-in-out' }}
        >
            <div
                className="bg-white rounded-lg shadow-lg w-96 transform transition-transform duration-500 ease-in-out"
                style={{
                    animation: isOpen ? 'slideUp 0.5s ease-out' : 'slideDown 0.5s ease-in',
                }}
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="px-6 py-4">
                    {children}
                </div>

                {/* Modal Footer */}
                <div className="flex justify-end items-center px-6 py-4 border-t">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
