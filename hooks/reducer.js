import { useState, useReducer, useEffect } from "react";


const initialState = {

    name: "",
    email: "",
    date: "",
    time: "",
    numberOfGuests: 1,
    tablePreference: "",
    occasion: "",
    message: "",
};

 export const ACTION_TYPES = {
    NAME: 'NAME',
    EMAIL: 'EMAIL',
    DATE: 'DATE',
    TIME: 'TIME',
    GUESTS: 'GUESTS',
    TABLE: 'TABLE',
    OCCASION: 'OCCASION',
    MESSAGE: 'MESSAGE',
};

function formReducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.NAME:
            return {
                ...state,
                name: action.payload,
            };
        case ACTION_TYPES.EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case ACTION_TYPES.DATE:
            return {
                ...state,
                date: action.payload,
            };
        case ACTION_TYPES.TIME:
            return {
                ...state,
                time: action.payload,
            };
        case ACTION_TYPES.GUESTS:
            return {
                ...state,
                numberOfGuests: action.payload,
            };
        case ACTION_TYPES.TABLE:
            return {
                ...state,
                tablePreference: action.payload,
            };
        case ACTION_TYPES.OCCASION:
            return {
                ...state,
                occasion: action.payload,
            };
        case ACTION_TYPES.MESSAGE:
            return {
                ...state,
                message: action.payload,
            };
        default:
            return state;
    }}

