import {BsFillPersonFill} from 'react-icons/bs'
import {MdPlace} from 'react-icons/md'
import {ImMobile} from 'react-icons/im'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import './login.css'


const Loggin = ()=>{
    const [data, formData] = useState({
        email:"",
        password:"",
    })
    const {isError,isSucces,message} = useSelector((state)=> state.auth)
    const {email,password} = data
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onChange = (event)=>{
        formData((prevState)=>({
            ...prevState,
            [event.target.name]:event.target.value
        }))
    }
    
    const submitInfo = async (event)=>{
        event.preventDefault()
        await localStorage.setItem("FormValues", JSON.stringify(data));
        console.log("formdata",data);
        await dispatch(login(data));
        navigate("/tuenti/profile")        
    }
    return (
        <div className="logginContainer">
            <div className='accesData'>
                <form onSubmit={submitInfo}>
                    <div className='formLeft'>
                        <label>Email</label>
                        <input className='inputName' type="text" name='email' value={email} onChange={onChange}/>
                        <label className='white'><input type="checkbox"/>Remember me</label>
                        
                    </div>
                    <div className='formRight'>
                        <label >Password</label>
                        <input className='inputName' type="text" name='password' value={password} onChange={onChange}/>
                        <a href="_blank"className='white'>Forget Password?</a>
                        
                        
                    </div>
                    <button className="hidden"type='submit'></button>
                </form>
            </div>
            <div className='welcomeContainer'>
                <div className='logoWelcome'>
                    <div className='imageLogo'></div>
                    <div className='imageText'>
                        <h2>What is Tuenti?</h2>
                        <p>Tuenti is a private social platform, which is only accessed by invitation. Every day millions of people use it to communicate with each other and share information.</p>
                    </div>
                </div>
                <div className='iconsInfo'>
                    <div className='icon'>
                            <span><BsFillPersonFill/></span>
                            <span><MdPlace/></span>
                            <span><ImMobile/></span>
                    </div>
                    <div className='description'>
                        <span>
                            <h3>Social</h3>
                            <p>Conect,share and communicate with friends,partners and family.
                            </p>
                        </span>
                        <span>
                            <h3>Local</h3>
                            <p>Discover local services and engage with the brands you really care about.</p>
                        </span>
                        <span>
                            <h3>Smartphone</h3>
                            <p>Get Tuenti in your Smartphone.</p>
                        </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Loggin;