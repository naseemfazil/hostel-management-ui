import React, { useEffect, useState } from 'react';
import TableWithPagination from './Table';
import Modal from './Modal';
import InputBox from './InputBox';
import axios from 'axios';
import { FaKey } from 'react-icons/fa';
import ExportToExcel from './ExportToExcel';



const AddStaff = () => {


    const columns = ['Name', 'mobile', 'Email', 'Age', 'Aadhar', 'Address', 'Actions', ''];


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [adhar, setAadhar] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [allStaff, setAllStaff] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const addStaff = async () => {
        const userObj = { name, age, adhar, mobile: mobile, email, address, isActive };
        console.log("selectedUserId", selectedUserId);

        if (!selectedUserId) {
            // Add new staff
            console.log("Adding new staff:", userObj);
            try {
                const result = await axios.post('http://localhost:3000/api/staff/create', userObj);
                console.log("Staff Added:", result.data);

                clearFields();
                closeModal();
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            // Edit existing staff
            console.log("Editing staff:", userObj);
            try {
                const result = await axios.post('http://localhost:3000/api/staff/edit', { id: selectedUserId, ...userObj });
                console.log("Staff Updated:", result.data);

                clearFields();
                closeModal();
                setSelectedUserId(null);
                getStaff();
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };


    const clearFields = () => {
        setName('');
        setAge('');
        setAadhar('');
        setAddress('');
        setEmail('');
        setmobile('');
    }


    useEffect(() => {
        getStaff();
    }, []);

    const getStaff = async () => {
        try {
            const result = await axios.post('http://localhost:3000/api/staff/getAll', {});
            console.log("result", result);
            // setLoading(true);
            const filteredData = result.data.map((customer) => ({
                name: customer.name,
                mobile: customer.mobile,
                email: customer.email,
                age: customer.age,
                adhar: customer.adhar,
                address: customer.address,
                id: customer._id,
            }));

            setAllStaff(filteredData);
            // setLoading(false);

        } catch (err) {
            console.log("err");

        }
    }

    const handleEdit = (userObj) => {
        console.log("handleEdit", userObj.id);
        openModal();
        setSelectedUserId(userObj.id)

        console.log("userid", selectedUserId);

        setName(userObj.name);
        setAge(Number(userObj.age));
        setAadhar(userObj.adhar);
        setAddress(userObj.address);
        setEmail(userObj.email);
        setmobile(userObj.mobile);
        // addStaff(userObj.id, userObj);
        // setTimeout(() => {
        // }, 1000);
        // const userToEdit = allCustomer.find((user) => user.id === id); // Access _id internally
        // setEditingUser(userToEdit); // Store the user in state
        // openModal(); // Open the modal for editing
    };


    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 ">Add Staff</h1>

            <div className='flex justify-end p-3 gap-2 items-center'>
                <div>
                    <button onClick={() => openModal()} className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600">Add</button>
                </div>
                <div>

                    <ExportToExcel data={allStaff} />
                </div>
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                    type="text" // Keep the type as "text"
                                    required
                                    value={age}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only numbers
                                        if (/^\d*$/.test(value)) {
                                            setAge(value); // Update state only if input is numeric
                                        }
                                    }}
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
                                    value={adhar}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only numbers
                                        if (/^\d*$/.test(value)) {
                                            setAadhar(value); // Update state only if input is numeric
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                    mobile Number
                                </label>
                            </div>

                            <div className="mt-2">
                                <InputBox
                                    type="number"
                                    required
                                    value={mobile}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        // Allow only numbers and ensure length doesn't exceed 10
                                        if (/^\d*$/.test(value)) {
                                            setMobile(value); // Update state if valid
                                        }
                                    }}
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center">
                            <input
                                id="online"
                                name="online"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                checked={isActive}
                                onChange={(e) => setIsActive(e.target.checked)}
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
                                onClick={() => addStaff()}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
            <TableWithPagination columns={columns} data={allStaff} rowsPerPage={5} isEdit={true} isPasswordChange={true} handleEdit={handleEdit} />
        </div>
    );
}

export default AddStaff;