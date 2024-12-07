import React from 'react';

const Navbar = () => {
    return (
        <div class="flex h-screen">
            {/* <div class="w-20 h-20">
                <img src="file:///C:/Users/admin/Downloads/DALL%C2%B7E%202024-12-07%2019.33.44%20-%20A%20modern%20and%20professional%20logo%20design%20for%20'HMS'%20(Hostel%20Management%20System).%20The%20design%20should%20include%20the%20text%20'HMS'%20in%20bold,%20clean%20typography,%20with%20s.webp" alt="HMS Logo" class="w-full h-full object-contain" />
            </div> */}
            {/* <!-- Side Navbar --> */}
            <div class="w-64 bg-white text-black hidden md:block pt-20 border-r border-[#ccc]">
                <div class="flex flex-col space-y-4 p-4">
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Dashboard</a>
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Profile</a>
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Settings</a>
                    <a href="#" class="text-lg font-normal hover:bg-blue-600 hover:text-white p-2 rounded">Logout</a>
                </div>
            </div>

            {/* <!-- Top Navbar --> */}
            <div class="flex-1 flex flex-col">
                <div class="bg-white text-black border-b border-[#ccc]">
                    <div class="flex justify-end items-center px-4 py-4">
                        {/* <div class="text-lg font-bold">Logo</div> */}
                        <div class="hidden md:flex space-x-4">
                            <div class="flex items-center space-x-4 p-4">
                                {/* <!-- Profile Image --> */}
                                <div>
                                    <h1 class="text-lg font-semibold text-gray-800">John Doe</h1>
                                    {/* <p class="text-sm text-gray-500">Software Developer</p> */}
                                </div>
                                <div class="w-10 h-10  rounded-full overflow-hidden border border-gray-300">
                                    <img src="https://via.placeholder.com/150" alt="Profile Picture" class="w-full h-full object-cover" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Page Content --> */}
                <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
                    <div class="bg-white p-6 rounded-lg shadow-lg w-full h-full ">
                        <h1 class="text-3xl font-bold text-gray-800">Welcome!</h1>
                        <div class="mt-4 text-gray-600">
                            Main route here....
                        </div>
                    </div>
                </div>




            </div>
        </div>


    );
}

export default Navbar;