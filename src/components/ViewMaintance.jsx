import React, { useEffect, useState } from 'react';
import TableWithPagination from './Table';
import axios from 'axios';
import { toast } from 'react-toastify';


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

    const columns = ['Room Number', 'Priority Level', 'Reason', 'Status', 'Staff Name', 'Action', ""];


    useEffect(() => {
        getMaintaiceDetails();
    }, []);

    const getMaintaiceDetails = async () => {
        try {
            const result = await axios.post('http://localhost:3000/api/maintenance/getMaintaice', {});
            console.log(result.data);
            const filteredData = result?.data?.map((eachDetails) =>
            ({


                roomNumber: eachDetails?.roomName,
                priorityLevel: eachDetails?.priorityLevel,
                reason: eachDetails?.reason,
                status: eachDetails.isSolved ? 'Solved' : 'Working',
                staffName: eachDetails?.staffName ? eachDetails?.staffName : '-',
                id: eachDetails?._id,
                staffId: eachDetails?.staffId

            }));
            console.log("filteredData", filteredData);
            SetMaintance(filteredData);

        } catch (err) {
            console.log("err", err);

        }
    }

    const requestDone = async (obj) => {
        console.log("obj", obj);
        let mainObj = {
            maintenanceRequestId: obj?.id,
            logs: [
                {
                    "status": "resolved",
                    "respondedBy": obj?.staffId,

                }
            ],
            assignedStaffId: obj?.staffId
        }
        try {
            const result = await axios.post('http://localhost:3000/api/maintenance/logs/update', mainObj);
            console.log(result);
            toast.success('Done', {
                // position: toast.POSITION.TOP_RIGHT,
                position: 'bottom-right',
                autoClose: 5000, // The toast will disappear after 5 seconds
            });

        } catch (err) {
            console.log("err", err);

        }

    }

    return (
        <div>
            <TableWithPagination columns={columns} data={getMaintaice} rowsPerPage={4} isDone={true} requestDone={requestDone} />

        </div>
    );
}

export default ViewMaintance;