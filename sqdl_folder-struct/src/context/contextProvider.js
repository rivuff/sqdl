import{ createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const LoginContext = createContext();

const ContextProvider = ({children}) =>{
    const [logged, setLogged] = useState(localStorage.getItem('userInfo')?true : false);
    //localStorage.getItem('userInfo') ||

    const [user, setUser] = useState('');
    const navigate = useNavigate();


    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setUser(userInfo);}, [logged, navigate])

    console.log("context",logged);
    return <LoginContext.Provider value={{logged,setLogged, user, setUser}}>{children} </LoginContext.Provider>

}

export const UserState = () => {
    return useContext(LoginContext);
}

export default ContextProvider