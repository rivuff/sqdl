import React from "react";
import {useState} from 'react';
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
    Input,

} from "@material-tailwind/react";

export default function TeacherInvite() {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);

    return (    

        <div>
            <div className="w-full flex flex-col items-center   p-3">
                <Button onClick={toggleOpen} className="w-2/3" >Invite Teacher</Button>
            </div>
            <Collapse open={open}>
                <Card className="my-4 mx-auto w-8/12">
                    <CardBody>
                        <div className="mb-4 flex flex-col gap-6 items-center">
                            <Input size="md" label="Name" />
                            <Input size="md" label="Email" />
                            <Button className="w-1/4" variant="outlined">Submit</Button>
                        </div>
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}
