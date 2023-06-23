
import Student from './Student.js'
import Teacher from './Teacher.js'
import Admin from './Admin.js'
import { useContext, useState } from "react";
import StudentLandingPage from './StudentLanding.js';
import React from 'react'

const LandingPage = ()=>{
    //cookie check for type
    const type = JSON.parse(localStorage.getItem('userInfo')).data.data.type;
    if (type == 'admin'){
        console.log('Admin dashboard')
        return (<Admin/>)
    }    if (type == 'student'){
        console.log('Student dashboard')
        return (<StudentLandingPage/>)
    }    if (type == 'teacher'){
        console.log('Teacher dashboard')
        return (<Teacher/>)
    }

}

export default LandingPage