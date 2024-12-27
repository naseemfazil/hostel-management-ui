import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

const RoomCreation = () => {
    const location = useLocation();
    const history = useHistory();
    const localState = location.state || {};
    console.log("localState", localState);


    const [formData, setFormData] = useState({
        roomName: "",
        roomSize: "",
        bedSize: "",
        maxOccupancy: "",
        isAcAvailable: false,
        rentPerDay: "",
    });

    // Update state when location.state changes (for editing cases)
    useEffect(() => {
        if (localState) {
            setFormData({
                roomName: localState?.obj?.roomName || "",
                roomSize: localState?.obj?.roomSize || "",
                bedSize: localState?.obj?.bedSize || "",
                maxOccupancy: localState?.obj?.maxOccupancy || "",
                isAcAvailable: localState?.obj?.isAcAvailable === 'yes',
                rentPerDay: localState?.obj?.rentPerDay || "",
            });

            console.log("formData", formData);

        }
    }, [localState]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (localState?.obj?.id) {
                // Call Edit API
                console.log("edit");
                // return

                const result = await axios.post(`http://localhost:3000/api/room/edit`, {
                    id: localState?.obj?.id,
                    ...formData,
                });
                console.log("Room Updated:", result.data);
                history.push('/home/view-room');
            } else {
                console.log("create");

                // return

                // Call Create API
                const result = await axios.post('http://localhost:3000/api/room/create', formData);
                console.log("Room Created:", result.data);
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-semibold text-center mb-6">
                        {localState.id ? "Edit Room Details" : "Create Room"}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        {/* Room Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="roomName">
                                Room Name
                            </label>
                            <InputBox
                                type="text"
                                id="roomName"
                                name="roomName"
                                value={formData.roomName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Room Size */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="roomSize">
                                Room Size
                            </label>
                            <select
                                id="roomSize"
                                name="roomSize"
                                value={formData.roomSize}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                                <option value="" disabled>Select room size</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>

                        {/* Bed Size */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="bedSize">
                                Bed Size
                            </label>
                            <select
                                id="bedSize"
                                name="bedSize"
                                value={formData.bedSize}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                                <option value="" disabled>Select bed size</option>
                                <option value="single">Single</option>
                                <option value="double">Double</option>
                                <option value="queen">Queen</option>
                                <option value="king">King</option>
                            </select>
                        </div>

                        {/* Max Occupancy */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="maxOccupancy">
                                Max Occupancy
                            </label>
                            <InputBox
                                type="number"
                                id="maxOccupancy"
                                name="maxOccupancy"
                                value={formData.maxOccupancy}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Is AC Available */}
                        <div className="mb-4 flex items-center">
                            <label className="block text-gray-700 font-medium mr-2" htmlFor="isAcAvailable">
                                AC Available
                            </label>
                            <input
                                type="checkbox"
                                id="isAcAvailable"
                                name="isAcAvailable"
                                checked={formData.isAcAvailable}
                                onChange={handleChange}
                                className="h-5 w-5"
                            />
                        </div>

                        {/* Rent */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="rent">
                                Rent per day
                            </label>
                            <InputBox
                                type="number"
                                id="rentPerDay"
                                name="rentPerDay"
                                value={formData.rentPerDay}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                {localState?.obj?.id ? "Edit Room" : "Create Room"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RoomCreation;
