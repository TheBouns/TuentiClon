import axios from "axios";
 const API_URI = "http://localhost:3005";

 const register = async(data) =>{
     const res = await axios.post(API_URI+"/users",data)
     return res.data;
 };

 const login = async (data)=>{
     
     const res = await axios.post(API_URI+"/users/login",data)
     if(res.data){
        localStorage.setItem("user",JSON.stringify(res.data))
    }
    return res.data
 }

const logout = async ()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const res = await axios.delete(API_URI+"/users/logout",{
        headers:{
            authorization: user?.token ,
        },
    }); 
    
    if(res.data){
        localStorage.removeItem("user");
    }
    return res.data
}

const profile = async ()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    
    const res = await axios.get(API_URI+"/users/options/myprofile",{
        headers:{
            authorization: user?.token,
        }
    })
    
   return res.data
}

 const authService ={
     register,
     login,
     logout,
     profile
    
 };

 export default authService;