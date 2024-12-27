import React, { useEffect, useState } from 'react';
import InputBox from './InputBox';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const RequestMaitance = () => {
    const [name, setName] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [issue, setIssue] = useState('');
    const [urgency, setUrgency] = useState('');
    const [category, setCategory] = useState('');
    const [staffList, setStaffList] = useState('');
    const [getStaffList, setGetStaffList] = useState([]);
    const [getRoomList, setGetRoomList] = useState([]);

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            roomId:roomNumber,
            email,
            mobile: phone,
            reason: issue,
            priorityLevel: urgency,
            category,
            staffId: staffList
        };
        console.log(formData);
        // return
        try {
            const result = await axios.post('http://localhost:3000/api/maintenance/create', formData);
            console.log(result.data);
            history.push('/home/view-maintain');

        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getRooms();
        getStaff();
    }, []);

    const getRooms = async () => {
        try {
            const result = await axios.post('http://localhost:3000/api/room/getAll', {});
            console.log(result.data);
            setGetRoomList(result?.data?.rooms);
        } catch {

        }
    }

    const getStaff = async () => {
        try {
            const result = await axios.post('http://localhost:3000/api/staff/getAll', {});
            console.log("getStafff", result.data);
            setGetStaffList(result?.data);

        } catch {

        }
    }
    return (
        <div className="mx-auto p-6 bg-gray-50 shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Name</label>
                        <InputBox
                            type="text"
                            id="first-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="">
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">Room Number</label>
                        <select
                            id="staff"
                            value={roomNumber}
                            onChange={(e) => setRoomNumber(e.target.value)}
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                            <option value="" disabled selected>
                                Please Select
                            </option>
                            {getRoomList.map((eachRoom) => (
                                <option key={eachRoom._id} value={eachRoom._id}>
                                    {eachRoom.roomName}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <InputBox
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <InputBox
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Issue Description</label>
                    <textarea
                        id="issue"
                        rows="2"
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    ></textarea>
                </div>

                <div className="mt-4">
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">Urgency</label>
                    <select
                        id="urgency"
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                        <option>Please Select</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </div>

                <div className="mt-4">
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700">Assign Staff</label>
                    <select
                        id="staff"
                        value={staffList}
                        onChange={(e) => setStaffList(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                        <option value="" disabled selected>
                            Please Select
                        </option>
                        {getStaffList.map((eachStaff) => (
                            <option key={eachStaff._id} value={eachStaff._id}>
                                {eachStaff.name}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="mt-6">
                    <span className="block text-sm font-medium text-gray-700">Maintenance Category</span>
                    <div className="mt-2 flex gap-3">
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Plumbing"
                                    checked={category === 'Plumbing'}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700">Plumbing</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Electrical"
                                    checked={category === 'Electrical'}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700">Electrical</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Appliances"
                                    checked={category === 'Appliances'}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700">Appliances</span>
                            </label>
                        </div>
                        <div>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    value="HVAC"
                                    checked={category === 'HVAC'}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                />
                                <span className="ml-2 text-sm text-gray-700">HVAC</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );

}

export default RequestMaitance;