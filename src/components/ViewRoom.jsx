import React, { useEffect, useState } from 'react';
import TableWithPagination from './Table';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaTrashCan } from 'react-icons/fa6';



const ViewRoom = () => {

    const [allRooms, setAllRooms] = useState([]);

    const history = useHistory();

    const columns = ['Room Name', 'Room Size', 'Bed Size', 'Max Occupancy', 'AC Available', 'Rent per day', 'Actions', ''];

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
        <div>
            <div className="flex justify-center gap-3 flex-wrap">
                {allRooms.map((eachDtls) => {
                    console.log("eachDtls", eachDtls);
                    return (

                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" alt="Card Image" class="card-image" />
                            <div class="card-content">
                                <div className="flex justify-between items-baseline">
                                    <h2 class="card-title">{eachDtls.roomName}</h2>
                                    <a class="edit-icon" title="Edit" onClick={() => handleEdit(eachDtls)}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png" alt="Edit Icon" />
                                    </a>

                                </div>
                                <p class="card-description">{eachDtls.roomSize}</p>
                                <p class="card-description">AC Available: {eachDtls.isAcAvailable}</p>
                                <div className='flex justify-between'>
                                    <button class="card-button">{eachDtls.rentPerDay}</button>
                                    {/* <div class="edit-icon" title="Edit"> */}
                                    <FaTrashCan onClick={() => handleDel(eachDtls.id)} className='cursor-pointer' />
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* <TableWithPagination columns={columns} data={allRooms} rowsPerPage={4} isEdit={true} handleEdit={handleEdit} isDeactive={true} handleDel={handleDel} /> */}
        </div>
    );
}

export default ViewRoom;