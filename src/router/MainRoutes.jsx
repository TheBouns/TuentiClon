import { Routes, Route } from "react-router-dom"
import Profile from "../components/Profile/Profile"
import Header from "../components/header/Header"
export const MainRoutes = ()=>{
    return(
        <>
        <Header/>
            <Routes>
                <Route path="/profile" element ={<Profile/>}/>   
                <Route path="/home" element = {<Profile/>}/>
            </Routes>
        </>
    )
}