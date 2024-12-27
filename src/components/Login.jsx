import React, { useState } from 'react';
import InputBox from './InputBox';
import BgImg from '../assets/BgImg2.jpg';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
                history.push('/home/view-room');
            }
        } catch (error) {
            console.error('Error:', error);
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
                        Forgot Password?{' '}
                        {/* <a className="font-semibold text-indigo-600 hover:text-indigo-500 z-50" onClick={() => history.push('/register')}>
                            Register
                        </a> */}
                        {/* <Link className="font-semibold text-indigo-600 hover:text-indigo-500 z-50" to="/register" onClick={() => history.push('/register')}>Register</Link> */}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;