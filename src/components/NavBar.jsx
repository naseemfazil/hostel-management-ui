import React, { useState } from 'react';
import HotelViewandEdit from './HotelViewandEdit';
import TableWithPagination from './Table';
import Modal from './Modal';
import InputBox from './InputBox';

const Navbar = () => {

    const columns = ['ID', 'Name', 'Email', 'Role'];
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Sam Johnson', email: 'sam@example.com', role: 'Manager' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' },
        { id: 5, name: 'Charlie Green', email: 'charlie@example.com', role: 'User' },
        // Add more data rows as needed
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div class="flex h-screen">
            {/* <div class="w-20 h-20">
                <img src="file:///C:/Users/admin/Downloads/DALL%C2%B7E%202024-12-07%2019.33.44%20-%20A%20modern%20and%20professional%20logo%20design%20for%20'HMS'%20(Hostel%20Management%20System).%20The%20design%20should%20include%20the%20text%20'HMS'%20in%20bold,%20clean%20typography,%20with%20s.webp" alt="HMS Logo" class="w-full h-full object-contain" />
            </div> */}
            {/* <!-- Side Navbar --> */}
            <div class="w-64 bg-white text-black hidden md:block pt-20 border-r border-[#ccc]">
                <div class="flex flex-col space-y-4 p-4">
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Dashboard</a>
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Profile</a>
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Settings</a>
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Logout</a>
                </div>
            </div>

            {/* <!-- Top Navbar --> */}
            <div class="flex-1 flex flex-col">
                <div class="bg-white text-black border-b border-[#ccc]">
                    <div class="flex justify-end items-center px-4 py-4">
                        {/* <div class="text-lg font-bold">Logo</div> */}
                        <div class="hidden md:flex space-x-4">
                            <div class="flex items-center space-x-4 p-4">
                                {/* <!-- Profile Image --> */}
                                <div>
                                    <h1 class="text-lg font-semibold text-gray-800">John Doe</h1>
                                    {/* <p class="text-sm text-gray-500">Software Developer</p> */}
                                </div>
                                <div class="w-10 h-10  rounded-full overflow-hidden border border-gray-300">
                                    <img src="https://via.placeholder.com/150" alt="Profile Picture" class="w-full h-full object-cover" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Page Content --> */}
                <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
                    <div class="bg-white p-6 rounded-lg shadow-lg w-full h-full ">
                        {/* <h1 class="text-3xl font-bold text-gray-800">Welcome!</h1> */}
                        <div class="mt-4 text-gray-600">
                            {/* <HotelViewandEdit /> */}
                            <div className='flex justify-end p-3'>
                                <button onClick={() => openModal()} className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600">Add</button>
                            </div>
                            <Modal isOpen={isModalOpen} onClose={closeModal} title="Add Staff">
                                <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                                    <div className="space-y-4">
                                        <div>
                                            {/* text-gray-900 */}
                                            <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                                                Name
                                            </label>
                                            <div className="mt-2">
                                                <InputBox
                                                    type="text"
                                                    required={true}
                                                />

                                            </div>
                                        </div>

                                        {/* <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                                    Role
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <InputBox
                                                    type="text"
                                                    required
                                                />
                                            </div>
                                        </div> */}
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                                    Age
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <InputBox
                                                    type="number"
                                                    required
                                                />
                                            </div>
                                        </div>


                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                                    Aadhar Number
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <InputBox
                                                    type="number"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                                    Mobile Number
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <InputBox
                                                    type="number"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                                    Email
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <InputBox
                                                    type="email"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                                <label
                                                    htmlFor="address"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Address
                                                </label>
                                            </div>

                                            <div className="mt-2">
                                                <textarea
                                                    id="address"
                                                    name="address"
                                                    required
                                                    rows="1"
                                                    className="w-full rounded-md border border-gray-300 p-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                                    placeholder="Enter your address"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-center">
                                            <input
                                                id="online"
                                                name="online"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <label
                                                htmlFor="online"
                                                className="ml-2 block text-sm font-medium text-gray-700"
                                            >
                                                Active
                                            </label>
                                        </div>



                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            <TableWithPagination columns={columns} data={data} rowsPerPage={5} />
                        </div>
                    </div>
                </div>




            </div>
        </div>


    );
}

export default Navbar;