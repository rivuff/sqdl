import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import React from "react";


// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
// } from "@material-tailwind/react";


import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import axios from 'axios'


const postData =  async(type)=>{
    
    //e.preventDefault();
    // let post_val = {
    // 'type': type,
    // 'email': email,
    // 'password': password
    // }

    if (type === 'teacher') {
        const email = document.getElementById('teacherEmail').value;
        const password = document.getElementById('teacherPassword').value;
        const postVal = {
          email: email,
          password: password
        };

        console.log(postVal.password);
    
        try {
            const response = await axios.post('http://localhost:5000/api/v1/teacher/login', postVal);
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
          //throw error; // Re-throw the error to handle it further up the call stack
        }
    }
    else if(type==='student'){
    try{
        let enrollmentNumber = document.getElementById('studentEnrollment').value
        let password = document.getElementById('studentPassword').value 
        let post_val = {
            'enrollmentNumber': enrollmentNumber,
            'password': password,
        }


        const res ={
            headers:{
                "Content-type":"application/json",
            }
        }

        const {data} = await axios.post(`http://localhost:5000/api/v1/student/login`, {enrollmentNumber, password})
        if(data){
            console.log("student login successfull");
            console.log(data);
        }
       
        localStorage.setItem('userInfo', JSON.stringify(data));
    
        
        // props.set(true);
    } catch (error) {
        console.log(error);
        //throw error
    }
    }

   
}


// function submitLogin(type) {
//     if (type === 'student') {
        
//     }
//     else if (type === 'teacher') {
//         try {
//             let email = document.getElementById('teacherEmail').value
//             let password = document.getElementById('teacherPassword').value
//             let post_val = {
//             'type': type,
//             'email': email,
//             'password': password
//         }

            
//         } catch (error) {
            
//         }
        
       
//     }


    

//     //submit post_val using axios
//     //route to next page with return, disable register button
//     console.log(post_val)
//     return null
// }
//component design

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <div>
            <div className="flex flex-wrap">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-blue-400 bg--600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Student
                            </a>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-blue-400 bg-" + color + "-600"
                                        : "text-blue" + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Teacher
                            </a>
                        </li>

                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="px-4 py-5 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                    <Form input='student' />
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <Form input='teacher' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Form(props) {
    if (props.input == 'student') {
        return (
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Student login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" id='studentRegister'>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" id='studentEnrollment' label="Enrollment Number" />
                        <Input type="password" id='studentPassword' size="lg" label="Password" />
                    </div>

                    <Button className="mt-6" fullWidth onClick={() => { postData('student') }}>
                        Login
                    </Button>

                </form>
            </Card>
        );
    }
    if (props.input == 'teacher') {
        return (
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Teacher Login
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" id='teacherRegister'>
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" id='teacherEmail' label="Email" />
                        <Input type="password" id='teacherPassword' size="lg" label="Password" />
                    </div>

                        <Button className="mt-6" fullWidth onClick={() => { postData('teacher') }}>
                            Login
                        </Button>
                </form>
            </Card>
        );
    }
}

export default function Login() {
    return (

        <div className="align-center p-10 flex items-center justify-center h-screen ">
            <div className="border-blue-400 border-4 rounded-lg p-10">


                <Tabs color='blue'></Tabs>
            </div>
        </div>
    );
}