import Student from './Student.JS'
import Teacher from './Teacher.JS'
import Admin from './Admin.js'


const LandingPage = ()=>{
    //cookie check for type
    let type = 'admin'
    if (type == 'student'){

    }
    else if(type =='teacher'){

    }
    else if (type =='admin'){
        return (
            <Admin/>
        )
    }

}

export default LandingPage