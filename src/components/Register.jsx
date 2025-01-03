import React, { useState } from 'react';
import InputBox from './InputBox';
import BgImg from '../assets/BgImg.jpg';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmationPassword] = useState('');
    const [gender, setGender] = useState('');


    // Save user
    const saveUser = async () => {
        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                const userObj = { name, email, password, gender, confirmPassword, };
                console.log("userObj", userObj);
                try {
                    const result = await axios.post('http://localhost:3001/register', userObj);
                    console.log(result.data);
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                console.log("Passwords do not match");
            }
        } else {
            console.log("Please fill in all fields");
        }


    }

    //   Handler for gender change
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <div className="h-screen bg-cover bg-center "
            style={{ backgroundImage: `url(${BgImg})`, zIndex: '-1', backgroundRepeat: 'no-repeat' }}>
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
                        Sign up to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6">

                        <div>
                            {/* text-gray-900 */}
                            <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                                Name
                            </label>
                            <div className="mt-2">
                                <InputBox
                                    id="name"
                                    name="name"
                                    type="text"
                                    required={true}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </div>
                        </div>

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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                    Conformation Password
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
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmationPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>

                            <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                                Gender
                            </label>
                            <div class="flex items-center space-x-6">

                                <div class="flex items-center">
                                    <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} class="h-4 w-4 text-blue-500 border-gray-300 focus:ring-0" />
                                    <label for="male" class="ml-2 text-white">Male</label>
                                </div>

                                <div class="flex items-center">
                                    <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} class="h-4 w-4 text-pink-500 border-gray-300 focus:ring-0" />
                                    <label for="female" class="ml-2 text-white">Female</label>
                                </div>

                                <div class="flex items-center">
                                    <input type="radio" id="other" name="gender" value="other" checked={gender === 'other'} onChange={handleGenderChange} class="h-4 w-4 text-gray-500 border-gray-300 focus:ring-0" />
                                    <label for="other" class="ml-2 text-white">Other</label>
                                </div>
                            </div>

                        </div>

                        <div>
                            <button
                                onClick={() => saveUser()}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        {/* <a className="font-semibold text-indigo-600 hover:text-indigo-500 z-50" onClick={() => history.push('/register')}>
                            Register
                        </a> */}
                        <Link className="font-semibold text-indigo-600 hover:text-indigo-500 z-50" to="/register">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;