import React from "react";
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
    Input,

} from "@material-tailwind/react";
import axios from 'axios'
import { useState } from "react";

export default function TeacherInvite() {
    const [msg, setMsg] = useState('')
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);

    async function submitHandler(e){

        const res = {
            headers: {
                "Content-type": "application/json"
            }
        }
        axios.post('http://localhost:5000/api/v1/admin/invite', { email: document.getElementById('invitationEmail').value, name: document.getElementById('invitationName').value}, res)
        .then((response)=>{
            if (response.status == 200){
                //update hook to show success
                setMsg('')
                setMsg(response.data.message)
                document.getElementById('invitationEmail').value = ''
                document.getElementById('invitationName').value = ''
            }
        })
        .catch((error)=>{
            setMsg('')
            setMsg('ERROR: '+error.response.data.message)
                //update hook to show error
        })
    }
    return (    

        <div>
            <div className="w-full flex flex-col items-center   p-3">
                <Button onClick={toggleOpen} className="w-2/3" >Invite Teacher</Button>
            </div>
            <Collapse open={open}>
                <Card className="my-4 mx-auto w-8/12">
                    <CardBody>
                        <div className="mb-4 flex flex-col gap-6 items-center">
                            <Typography className={msg == '' ? 'hidden' : 'visible font-semibold'}>
                                {msg}
                            </Typography>
                            <Input size="md" label="Name" id ='invitationName'/>
                            <Input size="md" label="Email" id = 'invitationEmail'/>
                            <Button className="w-1/4" variant="outlined" onClick={(e) => { submitHandler(e)}}>Submit</Button>
                        </div>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}
