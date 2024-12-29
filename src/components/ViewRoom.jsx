import React, { useEffect, useState } from 'react';
import TableWithPagination from './Table';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaTrashCan } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import { formatISODate } from '../utils/dateFormat';



const ViewRoom = () => {

    const [allRooms, setAllRooms] = useState([]);
    const [allocationDtls, setAllocationDtls] = useState([]);

    const history = useHistory();
    const [activeTab, setActiveTab] = useState(0);

    const columns = ['Room Name', 'Customer Name', 'Check In', 'Check Out', 'Status'];

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = async () => {
        try {
            const result = await axios.post('http://localhost:3000/api/room/getAll', {});
            console.log("result", result.data.rooms);
            // setLoading(true);
            const filteredData = result?.data?.rooms.map((room) => ({
                roomName: room.roomName,
                roomSize: room.roomSize,
                bedSize: room.bedSize,
                maxOccupancy: room.maxOccupancy,
                isAcAvailable: room.isAcAvailable ? "Yes" : 'No',
                rentPerDay: room.rentPerDay,
                id: room._id,
            }));

            setAllRooms(filteredData);
            const tableData = result?.data?.rooms.map((room) => ({
                roomName: room.roomName,
                customerName: room?.allocation?.customerName,
                checkInDate: formatISODate(room?.allocation?.checkInDate),
                checkOutDate: formatISODate(room?.allocation?.checkOutDate),
                status: room?.allocation.status,

            }));

            setAllocationDtls(tableData);


        } catch (err) {
            console.log("err", err);
        }
    }

    const handleEdit = (obj) => {
        console.log("obj", obj);
        history.push('/home/room-creation', { obj })
    }

    const handleDel = async (roomId) => {
        console.log("id", roomId);

        // return
        try {
            const result = await axios.post('http://localhost:3000/api/room/deactivate', { roomId });
            console.log("result", result);
            if (result?.data?.message == "Room deactivated successfully") {
                toast.success('Delete successful!', {
                    // position: toast.POSITION.TOP_RIGHT,
                    position: 'bottom-right',
                    autoClose: 5000, // The toast will disappear after 5 seconds
                });
                // alert('Success');
                getRooms();
            }

        } catch (err) {
            console.log("err", err);

        }

    }
    return (
        <div className="max-w-4xl mx-auto mt-10">
            {/* <div className="flex justify-center items-center">
                    <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
                    <p className="ml-3 text-blue-500">Loading...</p>
                </div> */}
            {/* Tab Buttons */}
            <div className="flex border-b border-gray-200">
                <button
                    onClick={() => setActiveTab(0)}
                    className={`px-6 py-2 text-sm font-medium ${activeTab === 0
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500 hover:text-blue-500"
                        }`}
                >
                    Room Cards
                </button>
                <button
                    onClick={() => setActiveTab(1)}
                    className={`px-6 py-2 text-sm font-medium ${activeTab === 1
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500 hover:text-blue-500"
                        }`}
                >
                    Room Table
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === 0 && (
                    <div className="flex justify-center gap-3 flex-wrap">
                        {allRooms.map((eachDtls) => (
                            <div key={eachDtls.id} className="card border border-gray-300 rounded-lg shadow-md p-4 w-64">
                                <img
                                    src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                                    alt="Room"
                                    className="card-image w-full h-40 object-cover rounded-md"
                                />
                                <div className="card-content mt-3">
                                    <div className="flex justify-between items-center">
                                        <h2 className="card-title text-lg font-semibold">{eachDtls.roomName}</h2>
                                        <a
                                            className="edit-icon cursor-pointer"
                                            title="Edit"
                                            onClick={() => handleEdit(eachDtls)}
                                        >
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png"
                                                alt="Edit Icon"
                                                className="w-5 h-5"
                                            />
                                        </a>
                                    </div>
                                    <p className="card-description text-sm text-gray-600">{eachDtls.roomSize}</p>
                                    <p className="card-description text-sm text-gray-600">
                                        AC Available: {eachDtls.isAcAvailable ? "Yes" : "No"}
                                    </p>
                                    <div className="flex justify-between items-center mt-3">
                                        <button className="card-button bg-blue-500 text-white px-4 py-2 rounded text-sm">
                                            ₹{eachDtls.rentPerDay}
                                        </button>
                                        <FaTrashAlt
                                            onClick={() => handleDel(eachDtls.id)}
                                            className="cursor-pointer text-red-500 text-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 1 && (
                    <TableWithPagination
                        columns={columns}
                        data={allocationDtls}
                        rowsPerPage={4}
                    />
                )}
            </div>
        </div>
    );
}

export default ViewRoom;