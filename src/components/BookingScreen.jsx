
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/_hotelBooking.css";
import { useLocation, useHistory } from 'react-router-dom';

const BookingScreen = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [persons, setPersons] = useState("2");

    const location = useLocation();
    const history = useHistory();
    const localState = location.state || {};

    console.log("localState",localState);
    


    const cardDetails = [
        {
            name: 'Deluxe Room',
            dec: 'Spacious room with modern amenities and Free Wifi',
            img: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Couple Room',
            dec: 'Cozy, romantic setup with Free Wifi and all comforts',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Family Suite',
            dec: 'Spacious suite for families with multiple beds and Free Wifi',
            img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Single Room',
            dec: 'Perfect for solo travelers with Free Wifi and compact space',
            img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
        },
        {
            name: 'Luxury Suite',
            dec: 'Premium suite with luxurious interiors and Free Wifi',
            img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=500'
        }
    ];


    return (
        <div className="booking">
            <div className="flex justify-center">
                <div className="booking-container">
                    {/* Check-in */}
                    <div className="booking-item">
                        <h4>Check in &#9662;</h4>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(date) => setCheckInDate(date)}
                            dateFormat="MMMM dd, yyyy"
                            className="date-picker"
                        />
                    </div>
                    <div className="divider"></div>

                    {/* Check-out */}
                    <div className="booking-item">
                        <h4>Check out &#9662;</h4>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(date) => setCheckOutDate(date)}
                            dateFormat="MMMM dd, yyyy"
                            className="date-picker"
                        />
                    </div>
                    <div className="divider"></div>

                    {/* Person Dropdown */}
                    <div className="booking-item">
                        <h4>Person &#9662;</h4>
                        <select
                            value={persons}
                            onChange={(e) => setPersons(e.target.value)}
                            className="person-select"
                        >
                            <option value="1">01 person</option>
                            <option value="2">02 persons</option>
                            <option value="3">03 persons</option>
                            <option value="4">04 persons</option>
                            <option value="5">05 persons</option>
                        </select>
                    </div>

                    {/* Book Now Button */}
                    <div className="booking-item button-container">
                        <button className="button">Book Now</button>
                    </div>
                </div>
            </div>
            {/* <div className="mt-4">
                <h4 className="font-semibold text-black lg:">Recommendation for you</h4>
                <div className="booking-rooms">
                    {cardDetails.map((eachDtls, index) => {
                        return (
                            <div class="card">
                                <img src={eachDtls.img} alt="Card Image" class="card-image" />
                                <div class="card-content">
                                    <div className="flex justify-between items-baseline">
                                        <h2 class="card-title">{eachDtls.name}</h2>
                                        <a class="edit-icon" title="Edit">
                                            <img src="https://cdn-icons-png.flaticon.com/512/1827/1827933.png" alt="Edit Icon" />
                                        </a>
                                    </div>
                                    <p class="card-description">{eachDtls.dec}</p>
                                    <button class="card-button">Read More</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div> */}

        </div>
    );
};

export default BookingScreen;

