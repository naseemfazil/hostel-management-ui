import React, { useState } from 'react';

const TableWithPagination = ({ columns, data, rowsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Get the data for the current page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

    // Change the page
    const changePage = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            {/* Table */}
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        {columns.map((column, index) => (
                            <th key={index} className="px-6 py-3 text-sm font-medium text-gray-700">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map((row, index) => (
                        <tr key={index} className="border-t">
                            {Object.values(row).map((cell, idx) => (
                                <td key={idx} className="px-6 py-4 text-sm text-gray-600">{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t">
                <button
                    onClick={() => changePage(currentPage - 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 disabled:bg-blue-300"
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <div className="flex space-x-2">
                    {[...Array(totalPages).keys()].map(page => (
                        <button
                            key={page}
                            onClick={() => changePage(page + 1)}
                            className={`px-4 py-2 text-sm font-medium rounded-md ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'}`}
                        >
                            {page + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => changePage(currentPage + 1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 disabled:bg-blue-300"
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TableWithPagination;
