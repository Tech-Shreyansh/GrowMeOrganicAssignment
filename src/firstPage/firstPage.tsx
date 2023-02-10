import React, { FC, useState } from "react";
import './firstPage.css';
import { Button, TextField } from "@mui/material";
import { createTheme } from "@mui/material";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FirstPage() {
    localStorage.clear()
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
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [inputTheme,setTheme] = useState(Theme1)
    function numCheck(e:any) {
        if(e.target.value<0){
            e.target.value*=-1
            toast.dismiss()
            toast("phone number can't be negative")
        }
        else if (e.target.value>=1000000000&&e.target.value<=1000000000000)
        {
            setNumber(e.target.value);
            document.getElementById("numError")!.style.visibility = "hidden";
            setTheme(Theme2)
        }
        else
        {
            setNumber(0);
            if(e.target.value==="")
            document.getElementById("numError")!.style.visibility = "hidden";
            else
            document.getElementById("numError")!.style.visibility = "visible";
            setTheme(Theme1)
        }
    }
    function nameCheck(e:any) {
        if((/^[a-zA-Z]*$/).test(e.target.value)||e.target.value=="")
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
        }
        else{
            toast.dismiss()
            toast.error("Enter All Details Correctly");
        }
    }

    return(<div id="infoBox">
        <h3>Enter Your Details</h3>
        <ThemeProvider theme={inputTheme}>
        <div>
        <TextField fullWidth className="textField" onClick={nameCheck} onChange={nameCheck} color="success" label="Name" variant="outlined" />
        <p className="error" id="nameError">Name Can Only Have Alphabets</p>
        </div>
        <div>
        <TextField fullWidth className="textField" onClick={numCheck} onChange={numCheck} type="number" color="success" label="Phone Number" variant="outlined" />
        <p className="error" id="numError">Enter a Valid 10-12 digit Number</p>
        </div>
        <div>
        <TextField fullWidth className="textField" onClick={emailCheck} onChange={emailCheck} type="email" color="success" label="Email" variant="outlined" />
        <p className="error" id="emailError">Enter a Valid Email Address</p>
        </div>
        <Button onClick={sumbit} color="secondary" variant="contained">Save</Button>
        </ThemeProvider>
        <ToastContainer limit={2} theme="light" position="top-center"/>
        </div>
    )
}

export default FirstPage;