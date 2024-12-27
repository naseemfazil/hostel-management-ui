import React from 'react';
import ExportToExcel from './ExportToExcel';
import PieChart from './dashbordComponets/PieChart';
import LineChart from './dashbordComponets/LineChart';
import BarChart from './dashbordComponets/BarChart';
import DonutChart from './dashbordComponets/DonutChart';


const Dashboard = () => {
    return (//bg-gray-100
        <div className="min-h-screen  p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {/* Chart Cards */}
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Pie Chart</h2>
                    <PieChart />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Line Chart</h2>
                    <LineChart />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Bar Chart</h2>
                    <BarChart />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Donut Chart</h2>
                    <DonutChart />
                </div>
            </div>

            {/* Financial Reports Section */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
            {/* Revenue Reports */}
            {/* <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Revenue Reports</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-600">
                            💰 <span>View Overall Revenue</span>
                        </li>
                        <li className="text-gray-600">
                            📊 <span>Analyze by Room Type</span>
                        </li>
                        <li className="text-gray-600">
                            ⏳ <span>Analyze by Time Period</span>
                        </li>
                    </ul>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View Report
                    </button>
                </div> */}

            {/* Expense Reports */}
            {/* <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Expense Reports</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-600">
                            🛠️ <span>Track Maintenance Costs</span>
                        </li>
                        <li className="text-gray-600">
                            💡 <span>Utility Expenses</span>
                        </li>
                        <li className="text-gray-600">
                            📋 <span>Other Expenditures</span>
                        </li>
                    </ul>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View Report
                    </button>
                </div> */}

            {/* Occupancy Reports */}
            {/* <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Occupancy Reports</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-600">
                            🏠 <span>View Room Occupancy Rate</span>
                        </li>
                    </ul>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View Report
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default Dashboard;
