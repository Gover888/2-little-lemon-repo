import React from 'react';
import Restaurant from "../assets/Restaurant.jpg";
import "./Booking.css"
import {useForm} from "../hooks/useForm";

function Booking(props) {
    const {
        form,
        // timeSlots,
        isFormValid,
        changeNameHandler,
        changeEmailHandler,
        changeDateHandler,
        changeTimeHandler,
        changeGuestsHandler,
        changeTableHandler,
        changeOccasionHandler,
        changeMessageHandler,
        submitHandler,
    } = useForm()
    return (
        <div className="booking">
            <h1>Booking</h1>
            <img src={Restaurant} width="200px" alt=""/>
            <form action="" onSubmit={submitHandler}>
                <div className="form  _left">
                    <label htmlFor="name">Your Name</label>
                    <input type="text"
                           value={form.name}
                           onChange={changeNameHandler}
                           id="name"
                    />
                    <label htmlFor="">Your Email</label>
                    <input type="email"
                        value={form.email}
                           onChange={changeEmailHandler}
                           id="email"
                    />
                    <label htmlFor="">Choose date</label>
                    <input type="date"
                        value={form.date}
                           onChange={changeDateHandler}
                           id="date"
                    />
                    <label htmlFor="">Choose time</label>
                    <input type="time"
                        value={form.time}
                           onChange={changeTimeHandler}
                           id="time"
                    />
                    {/*<select onChange={changeTimeHandler} value={form.time} id="res-time">*/}
                    {/*    {timeSlots.map((slot) => (*/}
                    {/*        <option key={slot} value={slot}>*/}
                    {/*            {slot}*/}
                    {/*        </option>*/}
                    {/*    ))}*/}
                    {/*</select>*/}
                </div>
                <div className="form  _middle">
                    <label htmlFor="">Number of guests</label>
                    <input type="number"
                           min='1'
                           max='6'
                        value={form.numberOfGuests}
                           onChange={changeGuestsHandler}
                           id="numberOfGuests"
                    />
                    <label htmlFor="">Occasion</label>
                    <select
                        value={form.occasion}
                        onChange={changeOccasionHandler}
                        id="occasion"
                    >
                        <option value="">None</option>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                    <label htmlFor="">Table preference</label>
                    <select
                        value={form.tablePreference}
                        onChange={changeTableHandler}
                        id="occasion"
                    >
                        <option value="">None</option>
                        <option value="inside">Inside</option>
                        <option value="outside">Outside</option>
                    </select>
                </div>
                <div className="form  _right">
                    <label htmlFor="">Additional requests</label>
                    <input type="text"
                        // value={form.name}
                           onChange={changeMessageHandler}
                           id="name"
                    />
                </div>
            </form>
            <button disabled={!isFormValid}>Make Reservation</button>
        </div>
    );
}

export default Booking;