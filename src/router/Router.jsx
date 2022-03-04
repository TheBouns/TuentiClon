import Loggin from "../components/loggin/loggin"
import Form from "../components/Form/Form"
import { MainRoutes } from "./MainRoutes"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PrivateZone from "../guards/PrivateZone"
import NotFound from "../components/NotFound/NotFound"

export const MainRouter = ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element ={<Loggin/>}/>
                <Route path="/register" element ={<Form/>}/>
                <Route path="/tuenti/*" element={
                <PrivateZone>
                    <MainRoutes/>
                </PrivateZone>
                }/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

