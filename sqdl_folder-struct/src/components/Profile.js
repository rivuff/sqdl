import React from 'react'
import Student from './pfp/Student.js';
import Teacher from './pfp/Teacher.js';



const Profile = () => {
    //cookie check
    const userData = JSON.parse(localStorage.getItem('userInfo'));
    if (userData == null) { //redirect user to login page to access pfp
        window.location.href = '/login'
    }
    else if (userData.type == 'admin'){
        window.location.href = '/dashboard' //reddirect admins to admin dashboard
    }
    else if (userData.type == 'student'){
        return(<Student/>)
    }
    else if (userData.type == 'teacher'){
        console.log('teacher page')
        return(<Teacher/>)
    }

}



export default Profile