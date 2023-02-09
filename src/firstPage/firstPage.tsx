import React, { FC, useState } from "react";
import './firstPage.css';
import { Button, TextField } from "@mui/material";
import { createTheme } from "@mui/material";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    const [inputTheme,setTheme] = useState(Theme1)
    function numCheck(e:any) {
        if(e.target.value<0){
            e.target.value*=-1
            toast.dismiss()
            toast("phone number can't be negative")
        }
        else if (e.target.value>=1000000000)
            setTheme(Theme2)
        else
            setTheme(Theme1)
    }
    function nameCheck(e:any) {
        if(e.target.value=="")
            setTheme(Theme1)
        else
            setTheme(Theme2)
    }
    function emailCheck(e:any) {
        if(e.target.value=="")
            setTheme(Theme1)
        else
            setTheme(Theme2)
    }

    return(<div id="infoBox">
        <h3>Enter Your Details</h3>
        <ThemeProvider theme={inputTheme}>
        <TextField className="textField" onClick={nameCheck} onChange={nameCheck} color="success" id="outlined-basic" label="Name" variant="outlined" />
        <TextField onClick={numCheck} onChange={numCheck} type="number" color="success" id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField onClick={emailCheck} onChange={emailCheck} color="success" id="outlined-basic" label="Email" variant="outlined" />
        <Button color="secondary" variant="contained">Save</Button>
        </ThemeProvider>
        <ToastContainer limit={2} theme="light" position="top-center"/>
        </div>
    )
}

export default FirstPage;