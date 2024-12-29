import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
    Redirect,
    useHistory
} from "react-router-dom";
import {
    FaBars,
    FaUserCircle,
    FaBell,
    FaUsers,
    FaBed,
    FaTools,
    FaMoneyBill,
    FaUserPlus,
    FaTachometerAlt
} from "react-icons/fa";
import AddStaff from "./AddStaff";
import RequestMaitance from "./RequestMaintance";
import HotelViewandEdit from "./HotelViewandEdit";
import HotelBillingScreen from "./Billing";
import BookingScreen from "./BookingScreen";
import RoomCreation from "./RoomCreation";
import ViewRoom from "./ViewRoom";
import AddCustomer from "./AddCustomer";
import Logo from '../assets/logo.jpg';
import IsAdminWrapper from "./IsAdmin";
import Dashboard from "./Dashboard";
import ViewMaintance from "./ViewMaintance";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loggedUser, setLoggedUser] = useState({});
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const history = useHistory();


    useEffect(() => {
        let storedUser = sessionStorage.getItem('user');
        storedUser = JSON.parse(storedUser);

        if (storedUser) {
            setLoggedUser(storedUser);
        }
        console.log("storedUser", storedUser);

    }, []);

    const logout = () => {
        console.log("logout");
        sessionStorage.removeItem('user');
        history.push('/');

    }

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Side Navbar */}
            <div
                className={`$ {
          sidebarOpen ? "w-64" : "w-20"
        } bg-white text-gray-700 pt-6 border-r border-gray-300 transition-all duration-300 hidden md:block`}
            >
                <button
                    className="text-gray-500 focus:outline-none ml-4 mb-6"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <FaBars size={24} />
                </button>
                <div className="flex flex-col space-y-4 p-4">
                    <IsAdminWrapper>
                        <NavLink
                            to="/home/dashboard"
                            className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                            activeClassName="bg-blue-100 text-blue-600"
                        >
                            <FaTachometerAlt className="mr-2" />
                            {sidebarOpen && "Dashboard"}
                        </NavLink>
                    </IsAdminWrapper>
                    <NavLink
                        to="/home/booking"
                        className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                        activeClassName="bg-blue-100 text-blue-600"
                    >
                        <FaBed className="mr-2" />
                        {sidebarOpen && "Booking"}
                    </NavLink>
                    <IsAdminWrapper>
                        <NavLink
                            to="/home/add-staff"
                            className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                            activeClassName="bg-blue-100 text-blue-600"
                        >
                            <FaUsers className="mr-2" />
                            {sidebarOpen && "Add Staff"}
                        </NavLink>
                    </IsAdminWrapper>
                    <NavLink
                        to="/home/room-creation"
                        className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                        activeClassName="bg-blue-100 text-blue-600"
                    >
                        <FaBed className="mr-2" />
                        {sidebarOpen && "Room Creation"}
                    </NavLink>
                    <NavLink
                        to="/home/view-room"
                        className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                        activeClassName="bg-blue-100 text-blue-600"
                    >
                        <FaBed className="mr-2" />
                        {sidebarOpen && "View Room"}
                    </NavLink>
                    <NavLink
                        to="/home/maintenance"
                        className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                        activeClassName="bg-blue-100 text-blue-600"
                    >
                        <FaTools className="mr-2" />
                        {sidebarOpen && "Maintenance"}
                    </NavLink>
                    <NavLink
                        to="/home/view-maintain"
                        className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                        activeClassName="bg-blue-100 text-blue-600"
                    >
                        <FaTachometerAlt className="mr-2" />
                        {sidebarOpen && "View Maintance Request"}
                    </NavLink>
                    <NavLink
                        to="/home/billing"
                        className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                        activeClassName="bg-blue-100 text-blue-600"
                    >
                        <FaMoneyBill className="mr-2" />
                        {sidebarOpen && "Billing"}
                    </NavLink>
                    <NavLink
                        to="/home/add-customer"
                        className="flex items-center text-lg font-medium hover:bg-blue-100 hover:text-blue-600 p-2 rounded"
                        activeClassName="bg-blue-100 text-blue-600"
                    >
                        <FaUserPlus className="mr-2" />
                        {sidebarOpen && "Add Customer"}
                    </NavLink>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <div className="bg-white text-gray-700 border-b border-gray-300">
                    <div className="flex justify-between items-center px-4 py-4">
                        <button
                            className="text-gray-500 md:hidden focus:outline-none"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <FaBars size={24} />
                        </button>
                        <div className="flex items-center">
                            <img
                                src={Logo}
                                alt="Hostel Management Logo"
                                className="w-10 h-10 mr-2"
                            />
                            <div className="text-lg font-bold">Hostel Management System</div>
                        </div>

                        <div className="relative">
                            <div
                                className="flex items-center space-x-4 cursor-pointer"
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                            >
                                <FaUserCircle size={32} className="text-gray-500" />
                                <p>{loggedUser?.name}</p>
                            </div>
                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-10 right-0 w-40 bg-white border border-gray-200 shadow-lg rounded-md">
                                    <ul className="flex flex-col">
                                        <li
                                            className="p-2 hover:bg-gray-100 cursor-pointer text-center"
                                            onClick={() => logout()}
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Page Content */}
                <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full overflow-y-auto">
                        <Switch>
                            <Route path="/home/booking" component={BookingScreen} />
                            <Route path="/home/add-staff" component={AddStaff} />
                            <Route path="/home/room-creation" component={RoomCreation} />
                            <Route path="/home/view-room" component={ViewRoom} />
                            <Route path="/home/maintenance" component={RequestMaitance} />
                            <Route path="/home/billing" component={HotelBillingScreen} />
                            <Route path="/home/add-customer" component={AddCustomer} />
                            <Route path="/home/dashboard" component={Dashboard} />
                            <Route path="/home/view-maintain" component={ViewMaintance} />

                            {/* Redirect /home to /home/billing */}
                            <Redirect from="/home" exact to="/home/billing" />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
