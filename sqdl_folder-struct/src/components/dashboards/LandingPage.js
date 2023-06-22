import Student from './Student.js'
import Teacher from './Teacher.js'
import Admin from './Admin.js'
import { useContext, useState } from "react";
import { UserState } from '../../context/contextProvider.js';

const LandingPage = ()=>{
    //cookie check for type
   const {logged, setLogged, user} = UserState();
    return (<Admin />)
    // console.log(user)
    // if (user.data.data.type == 'student'){
    //      return <Student.js/>
    // }
    // else if(user.data.data.type =='teacher'){
    //     return <Teacher.js/>
    // }
    // else if (user.data.data.type =='admin'){
    //     return (
    //         <Admin/>
    //     )
    // }

}

export default LandingPage