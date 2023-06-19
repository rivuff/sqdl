//imports
import {
    Card,
    Input,
    Button,
    Typography,
    input,
} from "@material-tailwind/react";
import React from "react";
import axios from 'axios'
import { useState, useEffect } from 'react'

const loginhandler= async(formData)=>{
    //axios submission here
    try {
        const response = await axios.post('http://localhost:5000/api/v1/teacher/login', formData);
        const data = response.data;
        console.log(response);
        if (data) {
            console.log('Sign in successful');
        } else {
            console.log('Data not found');
        }
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        console.log("User not found");
    }
}   



export default function Login() {

    //initializing states
    let [formData, setData] = useState({
        email : '',
        password : '',
        errmsg: ''
    })
     


    useEffect(()=>{
        let errmsg = document.getElementById('errmsg')
        let email = formData.email
        console.log()
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
            errmsg.style.visibility = 'block'
            errmsg.value = 'Please enter valid email address'
        }
    })

    return (
        <div className="align-center p-10 flex items-center justify-center h-screen ">
            <div className="border-blue-400 border-4 rounded-lg p-10">
                <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray" className='capitalize'>
                    Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to Login
                </Typography>
                <Typography color="red" className="mt-1 font-normal" id ='errmsg'>
                    {formData.errmsg!=''?formData.errmsg:''}
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" id='loginForm'>
                    <div className="mb-4 flex flex-col gap-6">
                            <Input id='email' type='email' label="Email address" size='lg' value={formData.email} onChange={(e) => { setData({ ...formData, email: e.target.value, errmsg: !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) ? 'Invalid Email Address' :'' })} }></Input>
                            <Input id='password' type='password' label="Password" size='lg' value={formData.password} onChange={(e) => setData({...formData, password: e.target.value})}></Input>
                    </div>
                        <Button disabled={((formData.errmsg != '') || (formData.password == '') || (formData.email == '')) ?true:false} className="mt-6 capitalize" fullWidth onClick={() => {
                            loginhandler(formData)
                        }}>
                        Login
                    </Button>

                </form>
            </Card>
            
        </div>
        </div>
    );
}