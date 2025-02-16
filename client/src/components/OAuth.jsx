import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { app } from "../firebase";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function OAuth() {

    const {  backendUrl,setUser,setToken,setShowLogin } =
        useContext(AppContext);

        const navigate= useNavigate();

  const handleGoogleclick = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const auth=getAuth(app)

        const result= await signInWithPopup(auth,provider)
        // console.log(result)


        //updated
        const res= await axios.post(backendUrl+"/api/user/google",{
            name:result.user.displayName,
            email:result.user.email,
        })

        const data= res.data;
        if(data.success){
          console.log(data)
            toast.success("Successfully logined");
            localStorage.setItem("token", data.token);
            setToken(data.token)
            setShowLogin(false)
            setUser({ name: data.user.name });
            navigate("/"); 
        }else{
            console.log("Could not login with google",data.message);
            toast.error(data.message)
            setShowLogin(false)
        }
    } catch (error) {
      console.error("Could not sign in with google", error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <button
      onClick={handleGoogleclick}
      type="button"
      className="w-full bg-red-700 hover:opacity-90 text-white py-2 px-8   rounded-full mt-2"
    >
      Continue with google
    </button>
  );
}

export default OAuth;