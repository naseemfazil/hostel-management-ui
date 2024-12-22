import React from 'react';
import TableWithPagination from './Table';


const ViewRoom = () => {

    const columns = ['SNo', 'Room Name', 'Room Size', 'Bed Size', 'Max Occupancy', 'AC Available', 'Rent per day'];

    const data = [
        {
            id: 1,
            roomName: 'Room 101',
            roomSize: '20x15',
            bedSize: 'King',
            maxOccupancy: 2,
            isAcAvailable: true,
            rent: 1000
        },
        {
            id: 2,
            roomName: 'Room 102',
            roomSize: '18x12',
            bedSize: 'Queen',
            maxOccupancy: 2,
            isAcAvailable: false,
            rent: 800
        },
        {
            id: 3,
            roomName: 'Room 103',
            roomSize: '22x16',
            bedSize: 'Single',
            maxOccupancy: 1,
            isAcAvailable: true,
            rent: 900
        },
        {
            id: 4,
            roomName: 'Room 104',
            roomSize: '20x20',
            bedSize: 'Double',
            maxOccupancy: 3,
            isAcAvailable: true,
            rent: 1200
        },
        {
            id: 5,
            roomName: 'Room 105',
            roomSize: '25x18',
            bedSize: 'King',
            maxOccupancy: 2,
            isAcAvailable: false,
            rent: 950
        }
    ];
    // columns, data, rowsPerPage
    return (
        <div>
            <TableWithPagination columns={columns} data={data} rowsPerPage={2} />
        </div>
    );
}

export default ViewRoom;