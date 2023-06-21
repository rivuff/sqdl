import Student from './Student.js'
import Teacher from './Teacher.JS'
import Admin from './Admin.js'
import { useContext, useState } from "react";
import { UserState } from '../../context/contextProvider.js';

const LandingPage = ()=>{
    //cookie check for type
   const {logged, setLogged, user} = UserState();

    
    if (user.data.data.type == 'student'){

    }
    else if(user.data.data.type =='teacher'){

    }
    else if (user.data.data.type =='admin'){
        return (
            <Admin/>
        )
    }

}

export default LandingPage