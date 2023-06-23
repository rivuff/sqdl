import React from 'react'
import { useParams } from 'react-router-dom'
import {
    Card,
    Typography,
    Input,
    Button,
    CardBody
} from "@material-tailwind/react";
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { UserState } from "../../context/contextProvider.js";
import {useState} from 'react'
const Accept = () => {
    const [state, setMsg] = useState({
        password: '',
        msg: ''
    })
    
    const token = useParams().token
    let email
    jwt.verify(token, 'emailVerification', (err, decoded)=>{email = decoded.email})
    
    async function Authenticate(userEmail){
        const res = {
            headers: {
                "Content-type": "application/json",
            }
        }
        axios.post('http://localhost:5000/api/v1/teacher/accept', {email: userEmail, password: state.password}, res)
        .then((response)=>{
            if (response.success == false){
                console.log(response.message)
                setMsg({ ...state, msg: response.message })
            }
            else if (response.success == true){
                console.log('Success Authenticating User')
                setMsg({ ...state, msg: 'Success Authenticating User' })
                localStorage.setItem('userInfo', JSON.stringify(response.data));
                const { logged, setLogged } = UserState();
            }
        })
        .catch((error)=>{
            setMsg({ ...state, msg: error.message })
            console.log(error)
        })
    }
    return (
        <div className = "align-center p-10 flex items-center justify-center h-screen max-w-3/5" >
            <div className="border-blue-400 border-4 rounded-lg p-10 max-w-3/5">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray" className='capitalize'>
                        Confirm Account Verification
                    </Typography>
                    <div className='max-w-sm'>
                        <Typography color={state.msg == 'Success Authenticating User' ? 'green' : 'red'} className={state.msg != '' ? 'capitalize visible col col-flex items-center justify-center text-center' : 'capitlize hidden '} >
                            {state.msg}
                        </Typography> 
                    </div>
                    <form>
                        <Input label='Password'  type='password' id='password' value={state.password} onChange={(e) => { setMsg({ ...state, password: e.target.value, msg: (e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,14}$/)) ? '' : 'Password must be between 6-14 characters, have at least one uppercase letter, lower case letter and number' })}}></Input>
                    </form>
                    <CardBody className='flex flex-col items-center justify-center'>
                        <Button onClick={() => { Authenticate(email) }}>Activate</Button>
                    </CardBody>
                </Card>

            </div>
        </div >
  )
}

export default Accept