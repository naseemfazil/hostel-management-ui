import React, { useState } from 'react';
import { FaCheck, FaEdit, FaKey } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';


const TableWithPagination = ({ columns, data, rowsPerPage, handleEdit, isEdit, isPasswordChange, isDeactive, handleDel, isAdd, book, isDone, requestDone }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter data based on the search query
    const filteredData = data.filter(row =>
        Object.values(row).some(value =>
            value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Get the data for the current page
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    // Change the page
    const changePage = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    return (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            {/* Search Box */}
            <div className="p-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-indigo-600"
                />
            </div>

            {/* Table */}
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100 text-left">
                        {columns.map((column, index) => (
                            <th key={index} className="px-6 py-3 text-sm font-medium text-gray-700">{column}</th>
                        ))}
                    </tr>
                </thead>
                {/* <tbody>
                    {currentRows.map((row, index) => (
                        <tr key={index} className="border-t">
                            {Object.values(row).map((cell, idx) => (

                                <td key={idx} className="px-6 py-4 text-sm text-gray-600">{cell.id ? 'icon' : cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody> */}
                <tbody>
                    {currentRows.map((row, index) => (
                        <tr key={index} className="border-t">
                            {/* Loop through all keys except 'id' */}
                            {Object.entries(row).map(([key, value], idx) =>
                                key !== 'id' && key !== 'staffId' ? (
                                    <td key={idx} className="px-6 py-4 text-sm text-gray-600">
                                        {value}
                                    </td>
                                ) : null
                            )}
                            {isEdit && (

                                <td className="px-6 py-4 text-sm text-gray-600">

                                    <FaEdit onClick={() => handleEdit(row)} className='cursor-pointer' />

                                </td>
                            )
                            }
                            {isPasswordChange && (
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    <FaKey onClick={() => handleEdit(row.id)} className='cursor-pointer' />
                                </td>
                            )
                            }
                            {isDeactive && (

                                <td className="px-6 py-4 text-sm text-gray-600">
                                    <FaTrashCan onClick={() => handleDel(row.id)} className='cursor-pointer' />
                                </td>
                            )
                            }
                            {isAdd && (
                                <button onClick={() => book(row)} className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600">Book</button>
                            )

                            }
                            {isDone && (
                                <FaCheck onClick={() => requestDone(row)} className="cursor-pointer" color="green" />

                            )

                            }
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


// export default TableWithPagination;
