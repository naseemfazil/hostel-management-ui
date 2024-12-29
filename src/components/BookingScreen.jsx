
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/_hotelBooking.css";
import { useLocation, useHistory } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';


const BookingScreen = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [persons, setPersons] = useState("2");
    const [roomNumber, setRoomNumber] = useState('');
    const [getRoomList, setGetRoomList] = useState([]);
    const [status, setStatus] = useState('');

    const location = useLocation();
    const history = useHistory();
    const localState = location.state || {};

    console.log("localState", localState);



    const cardDetails = [
        {
            name: 'Deluxe Room',
            dec: 'Spacious room with modern amenities and Free Wifi',
            img: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Couple Room',
            dec: 'Cozy, romantic setup with Free Wifi and all comforts',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Family Suite',
            dec: 'Spacious suite for families with multiple beds and Free Wifi',
            img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Single Room',
            dec: 'Perfect for solo travelers with Free Wifi and compact space',
            img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Luxury Suite',
            dec: 'Premium suite with luxurious interiors and Free Wifi',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500'
        }
    ];

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = async () => {
        try {
            const result = await axios.post('http://localhost:3000/api/room/getAll', {});
            console.log(result.data);
            setGetRoomList(result?.data?.rooms);
        } catch {

        }
    }


    const bookNow = async () => {
        let obj = { checkInDate, checkOutDate, occupancyCount: Number(persons), roomId: roomNumber, status, customerId: localState?.userObj?.id };

        console.log("obj", obj);

        try {
            const result = await axios.post('http://localhost:3000/api/roomAllocation/create', obj);
            console.log("result", result);
            toast.success('Booking successful!', {
                // position: toast.POSITION.TOP_RIGHT,
                position: 'bottom-right',
                autoClose: 5000, // The toast will disappear after 5 seconds
            });
            history.push('/home/add-customer');

        } catch (err) {
            console.log("err", err);

        }


    }

    return (
        <div className="booking flex justify-center items-center py-8">
            <div className="w-full max-w-lg">
                {/* Customer Number */}
                <div className="mb-4">
                    <label htmlFor="customerNumber" className="block text-sm font-medium text-gray-700">
                        Customer Number
                    </label>
                    <p className="mt-1 text-gray-900">{localState?.userObj?.name}</p>
                </div>

                {/* Check-in */}
                <div className="mb-4">
                    <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700">
                        Check-In
                    </label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date) => setCheckInDate(date)}
                        dateFormat="MMMM dd, yyyy"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>

                {/* Check-out */}
                <div className="mb-4">
                    <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700">
                        Check-Out
                    </label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date) => setCheckOutDate(date)}
                        dateFormat="MMMM dd, yyyy"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>

                {/* Person Dropdown */}
                <div className="mb-4">
                    <label htmlFor="persons" className="block text-sm font-medium text-gray-700">
                        Person
                    </label>
                    <select
                        value={persons}
                        onChange={(e) => setPersons(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                        <option value="1">01 person</option>
                        <option value="2">02 persons</option>
                        <option value="3">03 persons</option>
                        <option value="4">04 persons</option>
                        <option value="5">05 persons</option>
                    </select>
                </div>

                {/* Status Dropdown */}
                <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                        <option value={"occupied"}>Occupied</option>
                        <option value={"reserved"}>Reserved</option>
                    </select>
                </div>

                {/* Room Number */}
                <div className="mb-4">
                    <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700">
                        Room Number
                    </label>
                    <select
                        id="roomNumber"
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

                {/* Book Now Button */}
                <div className="mb-4">
                    <button
                        onClick={() => bookNow()}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>




    );
};

export default BookingScreen;

