import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import "./secondPage.css"
import Data from "./data";

function SecondPage () {
    const name = localStorage.getItem("name") || ""
    const email = localStorage.getItem("email") || ""
    const number = localStorage.getItem("number") || ""
    const navHandler = useNavigate();
    
    useEffect(() =>{if(name&&email&&number)
    {}
    else
    navHandler('/',{state: {status:0}})
    })
    return<div>
        <div id="detailsView">
            <p><b>Name :</b> {name}</p>
            <p><b>Number :</b> {number}</p>
            <p><b>Email :</b> {email}</p>
        </div>
        <Data/>
        <ToastContainer limit={2} theme="light" position="top-center"/>
    </div>
}

export default SecondPage;