import{ createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginContext = createContext();

const ContextProvider = ({children}) =>{
    const [logged, setLogged] = useState(localStorage.getItem('userInfo')?true : false);

    const [user, setUser] = useState(localStorage.getItem('userInfo') || '');
    const navigate = useNavigate();

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log(userInfo);
        setUser(userInfo);
        if(logged===true){
            navigate('/')
        }
        console.log(logged);
    }, [logged, navigate])

    console.log("context",logged);
    return <LoginContext.Provider value={{logged,setLogged, user, setUser}}>{children} </LoginContext.Provider>

}

export const UserState = () => {
    return useContext(LoginContext);
}

export default ContextProvider