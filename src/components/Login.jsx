import React, { useState } from 'react';
import InputBox from './InputBox';
import BgImg from '../assets/BgImg2.jpg';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const [loggedId, setLoggedId] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');


    const toggleModal = () => setIsOpen(!isOpen);


    const login = async () => {
        let obj = {
            email,
            password
        }
        console.log("obj", obj);

        // if (userObj.admin === 'admin'){

        // }else{

        // }
        //     history.push('/home/billing');
        // return
        try {
            const result = await axios.post('http://localhost:3000/login', obj);
            console.log(result.data);
            sessionStorage.setItem('user', JSON.stringify({ name: result?.data?.name, role: result?.data?.role }));
            if (result?.data?.role === 'admin') {
                console.log("works");
                history.push('/home/dashboard');
            } else {
                console.log("stafff");
                if (password == "Welcome@123") {

                    setLoggedId(result?.data?.staffId);
                    toggleModal();

                } else {
                    console.log("--------------------");
                    history.push('/home/view-room');
                }

            }
        } catch (error) {
            console.error('Error:', error);
        }

    }

    const handleSubmit = async () => {


        if (newPassword !== confirmPassword) {
            alert('Please enter crt password')
        } else {
            let userObj = {

                id: loggedId,
                newPassword: newPassword,
                oldPassword: password

            }
            console.log("obj", userObj);
            const result = await axios.post('http://localhost:3000/api/staff/changePassword', userObj);
            console.log("result", result);
            if (result?.data?.message == "Password updated successfully.") {
                toast.success('Password has been Changed', {
                    // position: toast.POSITION.TOP_RIGHT,
                    position: 'bottom-right',
                    autoClose: 5000, // The toast will disappear after 5 seconds
                });
                history.push('/home/view-room');
            }

        }



    }
    return (
        <div className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BgImg})`, zIndex: '-1' }}>
            {/* <div className="bg-blue-500 text-white p-4 text-center">
                Tailwind CSS is working!
            </div> */}

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 z-9999">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        alt="Your Company"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        className="mx-auto h-10 w-auto"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">
                        <div>
                            {/* text-gray-900 */}
                            <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <InputBox
                                    id="email"
                                    name="email"
                                    type="email"
                                    required={true}
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                    Password
                                </label>
                                {/* <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div> */}
                            </div>

                            <div className="mt-2">
                                <InputBox
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={() => login()}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        {/* Forgot Password?{' '} */}
                        {/* <a className="font-semibold text-indigo-600 hover:text-indigo-500 z-50" onClick={() => history.push('/register')}>
                            Register
                        </a> */}
                        {/* <Link className="font-semibold text-indigo-600 hover:text-indigo-500 z-50" to="/register" onClick={() => history.push('/register')}>Register</Link> */}
                    </p>
                </div>
            </div>



            {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Change Password</h2>

                        {/* Old Password Input */}
                        <div className="mb-4">
                            <label htmlFor="oldPassword" className="block text-gray-700 mb-2">
                                Old Password
                            </label>
                            <input
                                type="password"
                                id="oldPassword"
                                value={password}
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"

                                required
                            />
                        </div>

                        {/* New Password Input */}
                        <div className="mb-4">
                            <label htmlFor="newPassword" className="block text-gray-700 mb-2">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Confirm New Password Input */}
                        <div className="mb-4">
                            <label htmlFor="confirmNewPassword" className="block text-gray-700 mb-2">
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                id="confirmNewPassword"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Change Password
                            </button>
                            <button
                                onClick={toggleModal}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;