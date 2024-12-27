import React, { useEffect, useState } from 'react';
import TableWithPagination from './Table';
import axios from 'axios';


const ViewMaintance = () => {


    const [getMaintaice, SetMaintance] = useState([]);

    const data = [
        {
            id: 1,
            roomNumber: 'Deluxe room',
            category: 'Electrical',
            priorityLevel: 'Medium',
            reason: 'Wifi not working',
            staffName: 'John'
        },
        {
            id: 2,
            roomNumber: 'Room 102',
            category: 'Plumbing',
            priorityLevel: 'High',
            reason: 'Leak in the bathroom',
            staffName: 'Alice'
        },
        // Add more rows as needed 'Category',
    ];

    const columns = ['Room Number', 'Priority Level', 'Reason', 'Status', 'Staff Name', 'Action'];


    useEffect(() => {
        getMaintaiceDetails();
    }, []);

    const getMaintaiceDetails = async () => {
        try {
            const result = await axios.post('http://localhost:3000/api/maintenance/getMaintaice', {});
            console.log(result.data);
            const filteredData = result?.data?.map((eachDetails) => 
                ({


                    roomNumber: eachDetails?.room?.roomName,
                    priorityLevel: eachDetails.priorityLevel,
                    reason: eachDetails.reason,
                    status: eachDetails.isSolved ? 'Solved' : 'Working',
                    staffName: eachDetails?.staff?.name ? eachDetails?.staff?.name : '-',
                    id: eachDetails._id

                }));
                console.log("filteredData",filteredData);
            SetMaintance(filteredData);
            
        } catch {

        }
    }

    return (
        <div>
            <TableWithPagination columns={columns} data={getMaintaice} rowsPerPage={4} />

        </div>
    );
}

export default ViewMaintance;