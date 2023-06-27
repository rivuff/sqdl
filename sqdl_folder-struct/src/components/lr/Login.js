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
import { UserState } from "../../context/contextProvider.js";


export default function Login() {
    //check if user is logged in
    if (localStorage.getItem('userInfo')!=null){
        window.location.href = '/dashboard'
    }

    //console.log(UserState);
   const {logged, setLogged} = UserState();
    //initializing states
    let [formData, setData] = useState({
        email : '',
        password : '',
        errmsg: ''
    })
     

    const loginhandler = async(e)=>{
        e.preventDefault();

        try {
            const res ={
                headers:{
                    "Content-type":"application/json",
                }
            }
            const data = await axios.post(`http://localhost:5000/api/v1/user/login`, {email, password},res)
            setLogged(true)
            console.log(data.data.data)
            localStorage.setItem('userInfo', JSON.stringify(data.data.data));
            console.log('Logged In')
            window.location.href = '/dashboard'

        } catch (error) {
            console.log(error);
            setData({...formData, errmsg: 'Invalid Username or password'})
        }
    }

    
    const {email , password} = formData;


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
                            <Input id='password' type='password' label="Password" size='lg' value={formData.password} onChange={(e) => setData({...formData, password: e.target.value, errmsg: ''})}></Input>
                    </div>
                        <Button disabled={((formData.errmsg != '') || (formData.password == '') || (formData.email == '')) ?true:false} className="mt-6 capitalize" fullWidth onClick={loginhandler}>
                        Login
                    </Button>

                </form>
            </Card>
            
        </div>
        </div>
    );
}