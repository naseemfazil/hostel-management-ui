import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChart from './dashbordComponets/PieChart';
import LineChart from './dashbordComponets/LineChart';
import BarChart from './dashbordComponets/BarChart';
import DonutChart from './dashbordComponets/DonutChart';

const Dashboard = () => {
    const [roomCategoryCount, setRoomCategoryCount] = useState(null);
    const [revenue, setRevenue] = useState(null);
    const [maintenanceStatusCount, setMaintenanceStatusCount] = useState(null);
    const [roomBookingCount, setRoomBookingCount] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [roomCategoryRes, revenueRes, maintenanceStatusRes, roomBookingRes] = await Promise.all([
                    axios.post('http://localhost:3000/api/dashboard/roomCategoryCount', {}),
                    axios.post('http://localhost:3000/api/dashboard/revenue', {}),
                    axios.post('http://localhost:3000/api/dashboard/maintenanceStatusCount', {}),
                    axios.post('http://localhost:3000/api/dashboard/roomBookingCount', {}),
                ]);
                console.log("roomCategoryRes", { roomCategoryRes, revenueRes, maintenanceStatusRes, roomBookingRes });

                setRoomCategoryCount(roomCategoryRes?.data?.chartData);
                setRevenue(revenueRes?.data?.chartData);
                setMaintenanceStatusCount(maintenanceStatusRes?.data?.chartData);
                setRoomBookingCount(roomBookingRes?.data?.chartData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (!roomCategoryCount || !revenue || !maintenanceStatusCount || !roomBookingCount) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Pie Chart</h2>
                    <PieChart data={roomCategoryCount} />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Line Chart</h2>
                    <LineChart data={revenue} />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Bar Chart</h2>
                    <BarChart data={maintenanceStatusCount} />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Donut Chart</h2>
                    <DonutChart data={roomBookingCount} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
