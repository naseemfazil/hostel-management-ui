import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaKey } from 'react-icons/fa';
import Modal from './Modal';
import InputBox from './InputBox';
import TableWithPagination from './Table';
import Loader from './Loader';

const AddCustomer = () => {



    const columns = ['Name', 'Mobile', 'Email', 'Age', 'Aadhar', 'Address', 'Actions'];

    // const data = [
    //     { id: 1, name: 'John Doe', age: 20, aadhar: 3123123313, mobile: 132343242, email: 'john@example.com', keyIcon: <FaKey /> },
    //     { id: 2, name: 'Jane Smith', age: 20, aadhar: 3123123313, mobile: 132343242, email: 'jane@example.com', },
    //     { id: 3, name: 'Sam Johnson', age: 20, aadhar: 3123123313, mobile: 132343242, email: 'sam@example.com', },
    //     { id: 4, name: 'Alice Brown', age: 20, aadhar: 3123123313, mobile: 132343242, email: 'alice@example.com', },
    //     { id: 5, name: 'Charlie Green', age: 20, aadhar: 3123123313, mobile: 132343242, email: 'charlie@example.com', },
    //     // Add more data rows as needed
    // ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [aadhar, setAadhar] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [allCustomer, setAllCustomer] = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getAllCustomer();
    }, []);


    const getAllCustomer = async () => {
        console.log("---------------");
        let obj = {};
        try {
            const result = await axios.post('http://localhost:3000/api/customers/getAll', obj);
            console.log("result", result);
            setLoading(true);
            const filteredData = result.data.map((customer) => ({
                name: customer.name,
                mobile: customer.mobile,
                email: customer.email,
                age: customer.age,
                adhar: customer.adhar,
                address: customer.address,
                id: customer._id,
            }));

            setAllCustomer(filteredData);
            setLoading(false);

        } catch (err) {
            console.log("err");

        }
    }


    const addCustomer = async () => {
        console.log("Works");
        let userObj = { name, age, adhar: aadhar, mobile, email, address, isActive };
        // setLoading(true);

        console.log({ userObj });
        try {
            const result = await axios.post('http://localhost:3000/api/customers/create', userObj);
            console.log(result);
            clearFiled();
            closeModal();
        } catch (error) {
            console.error('Error:', error);
        }

    }


    const clearFiled = () => {
        console.log("--------------------");

        setName('');
        setAge('');
        setAadhar('');
        setAddress('');
        setEmail('');
        setMobile('');
    }

    return (
        <div>
            <div className='flex justify-end p-3'>
                <button onClick={() => openModal()} className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600">Add</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Add Customer" >
                <div className="mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-4">
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}

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
                                    value={age}
                                    onChange={(e) => setAge(Number(e.target.value))}
                                />
                            </div>
                        </div>
                        {/* </div> */}

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
                                    Aadhar Number
                                </label>
                            </div>

                            <div className="mt-2">
                                <InputBox
                                    type="number"
                                    required
                                    value={aadhar}
                                    onChange={(e) => setAadhar(Number(e.target.value))}
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
                                    value={mobile}
                                    onChange={(e) => setMobile(Number(e.target.value))}
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

                        {/* <div className="mt-4 flex items-center">
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
                        </div> */}



                        <div>
                            <button
                                onClick={() => addCustomer()}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add
                            </button>
                        </div>

                    </div>
                </div>
            </Modal>
            {loading && (
                <Loader />
            )}
            <TableWithPagination columns={columns} data={allCustomer} rowsPerPage={5} />
        </div>
    );
}

export default AddCustomer;