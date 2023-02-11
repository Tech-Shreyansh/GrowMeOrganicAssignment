import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const name = localStorage.getItem("name") || ""
const email = localStorage.getItem("email") || ""
const number = localStorage.getItem("number") || ""
function SecondPage () {
    const navHandler = useNavigate();
    useEffect(() =>{if(name&&email&&number)
    {}
    else
    navHandler('/',{state: {status:0}})
    })
    return<div>
        <ToastContainer limit={2} theme="light" position="top-center"/>
    </div>
}

export default SecondPage;