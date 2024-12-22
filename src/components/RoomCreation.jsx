import React, { useState } from 'react';
import InputBox from './InputBox';


const RoomCreation = () => {


    const [formData, setFormData] = useState({
        roomName: "",
        roomSize: "",
        bedSize: "",
        maxOccupancy: "",
        isAcAvailable: false,
        rent: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle the form submission here
    };
    return (
        <div>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-semibold text-center mb-6">Room Details</h2>
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
                            <InputBox
                                type="text"
                                id="roomSize"
                                name="roomSize"
                                value={formData.roomSize}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Bed Size */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="bedSize">
                                Bed Size
                            </label>
                            <InputBox
                                type="text"
                                id="bedSize"
                                name="bedSize"
                                value={formData.bedSize}
                                onChange={handleChange}
                                required
                            />
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
                                id="rent"
                                name="rent"
                                value={formData.rent}
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
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RoomCreation;