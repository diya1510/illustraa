import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
 
const AppContextProvider = (props) => {
    const [user, setUser] = useState(null) ;
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)

    //darkMode
    const[isDarkMode,setIsDarkMode]= useState(localStorage.getItem("darkMode")==="true")
    //
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const loadCreditsData = async()=>{
        try {
            const {data} = await axios(backendUrl + '/api/user/credits', {headers: {token}})
            if(data.success){
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log();
            toast.error(error.message)
        }
    }

    const generateImage = async(prompt)=>{
        try {
            const {data} = await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers: {token}})
            if(data.success){
                loadCreditsData()
                return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditsData()
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
    }

    useEffect(()=>{
        if(token){
            loadCreditsData()
        }
    },[token])

            //for dark mode
        useEffect(()=>{
            if(isDarkMode){
            document.body.classList.add('dark');
            }else{
            document.body.classList.remove('dark');
            }
            localStorage.setItem("darkMode",isDarkMode)
        },[isDarkMode])
        /**/

    const value = {
        user, setUser, showLogin, setShowLogin, backendUrl, token, setToken, 
        credit, setCredit, loadCreditsData, logout, generateImage, isDarkMode, setIsDarkMode
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider