import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Card,
    Typography,
    Button,
    CardBody
} from "@material-tailwind/react";
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { UserState } from "../../context/contextProvider.js";
import {useState} from 'react'
const Accept = () => {
    const [msg, setMsg] = useState('')
    const token = useParams().token
    let email
    jwt.verify(token, 'emailVerification', (err, decoded)=>{email = decoded.email})
    
    async function Authenticate(userEmail){
        const res = {
            headers: {
                "Content-type": "application/json",
            }
        }
        axios.post('http://localhost:5000/api/v1/teacher/accept', {email: userEmail}, res)
        .then((response)=>{
            if (response.success == false){
                console.log(response.message)
                setMsg(response.message)
            }
            else if (response.success == true){
                console.log('Success Authenticating User')
                setMsg('Success Authenticating User')
                localStorage.setItem('userInfo', JSON.stringify(response.data));
                const { logged, setLogged } = UserState();
            }
        })
        .catch((error)=>{
            setMsg(error.message)
            console.log(error)
        })
    }
    return (
        <div className = "align-center p-10 flex items-center justify-center h-screen " >
            <div className="border-blue-400 border-4 rounded-lg p-10">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray" className='capitalize'>
                        Confirm Account Verification
                    </Typography>
                    <Typography color={msg == 'Success Authenticating User' ? 'green' : 'red'} className={msg != '' ? 'capitalize visible col col-flex items-center justify-center text-center':'capitlize hidden '} >
                        {msg}
                    </Typography>
                    
                    <CardBody className='flex flex-col items-center justify-center'>
                        <Button onClick={() => { Authenticate(email) }}>Verify</Button>
                    </CardBody>
                </Card>

            </div>
        </div >
  )
}

export default Accept