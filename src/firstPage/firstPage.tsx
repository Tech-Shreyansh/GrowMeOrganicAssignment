import React, { FC, useEffect, useState } from "react";
import './firstPage.css';
import { Button, TextField } from "@mui/material";
import { createTheme } from "@mui/material";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
var status = 2


function FirstPage() {
    const Theme1 = createTheme({
        palette: {
            success: {
              main: '#A7727D',
            },
            secondary:{
                main:'#A7727D'
            }
        }
    })

    const Theme2 = createTheme({
        palette: {
            secondary:{
                main:'#A7727D'
            }
        }
    })
    const location = useLocation();
    if(status===2){if(location.state===null)
    status = 1
    else
    status = location.state.status}


    const navHandler = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [inputTheme,setTheme] = useState(Theme1)
    function numCheck(e:any) {
        if((/^[0-9]*$/).test(e.target.value)&&e.target.value!="")
        {
            if (e.target.value>=1000000000&&e.target.value<=1000000000000)
            {
                setNumber(e.target.value);
                document.getElementById("numError")!.style.visibility = "hidden";
                setTheme(Theme2)
            }
            else
            {
                setNumber(0)
                document.getElementById("numError")!.style.visibility = "visible";
                setTheme(Theme1)
            }

        }
        else
        {
            setNumber(0);
            if(e.target.value==="" || e.target.value === undefined)
            document.getElementById("numError")!.style.visibility = "hidden";
            else
            document.getElementById("numError")!.style.visibility = "visible";
            setTheme(Theme1)
        }
    }
    function nameCheck(e:any) {
        if((/^[a-zA-Z ]*$/).test(e.target.value)||e.target.value=="")
        {
            setName(e.target.value);
            document.getElementById("nameError")!.style.visibility = "hidden";
            if(e.target.value==="")
                setTheme(Theme1)
            else
                setTheme(Theme2)
        }
        else
        {
            setName("")
            document.getElementById("nameError")!.style.visibility = "visible";
            setTheme(Theme1)
        }
    }
    function emailCheck(e:any) {
        if((/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/).test(e.target.value) || e.target.value==="")
        {
            setEmail(e.target.value);
            document.getElementById("emailError")!.style.visibility = "hidden";
            if(e.target.value==="")
                setTheme(Theme1)
            else
                setTheme(Theme2)
        }
        else
        {
            setEmail("")
            document.getElementById("emailError")!.style.visibility = "visible";
            setTheme(Theme1)
        }
    }
    function sumbit(){
        if(name&&email&&number){
            localStorage.setItem("name",name)
            localStorage.setItem("number",String(number))
            localStorage.setItem("email",email)
            navHandler('/main')
        }
        else{
            toast.dismiss()
            toast.error("Enter All Details Correctly");
        }
    }
    useEffect(()=>{
        if(status === 0)
        {
        toast.dismiss()
        toast.error("Must Enter Your Details First")
        status = 1
        }
    })
    
    return(<div id="infoBox">
        <h3>Enter Your Details</h3>
        <ThemeProvider theme={inputTheme}>
        <div>
        <TextField fullWidth className="textField" onClick={nameCheck} onChange={nameCheck} color="success" label="Name" variant="outlined" />
        <p className="error" id="nameError">Name Can Only Have Alphabets</p>
        </div>
        <div>
        <TextField fullWidth className="textField" onClick={numCheck} onChange={numCheck} color="success" label="Phone Number" variant="outlined" />
        <p className="error" id="numError">Enter a Valid 10-12 digit Number with no Other characters </p>
        </div>
        <div>
        <TextField fullWidth className="textField" onClick={emailCheck} onChange={emailCheck} color="success" label="Email" variant="outlined" />
        <p className="error" id="emailError">Enter a Valid Email Address</p>
        </div>
        <Button onClick={sumbit} color="secondary" variant="contained">Save</Button>
        </ThemeProvider>
        <ToastContainer limit={2} theme="light" position="top-center"/>
        </div>
    )
}

export default FirstPage;