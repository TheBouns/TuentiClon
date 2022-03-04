import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { register } from '../../features/auth/authSlice';
import './Form.css'
const Form = () =>{
    const [formData,setFormData] = useState({
        sex:"",
        birthday:"",
        age:0,
        maritalSt:"",
        interest:"",
        city:"",
        website:"",
        name:"",
        password:"",
        email:"",
        
    })
    const {sex,birthday,age,maritalSt,interest,city,website,name,password,email} = formData;
    const dispatch = useDispatch();
    const onSubmit = (event)=>{
        setFormData((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const submitInfo = (event)=>{
        event.preventDefault()
        console.log("formdata",formData);
        dispatch(register(formData))
    }
    return(
        <div id="formContainer">
            <img className='formImage' src='https://res.cloudinary.com/ducxt7zb3/image/upload/v1645532143/tuentiTransparente_tozqdb.png'></img>
            
                <form className='formRegister'onSubmit={submitInfo}>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={onSubmit}/>
                    <label>Sex</label>
                    <select name='sex' value={sex} onChange={onSubmit}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select> 
                    <label>Email</label>
                    <input type="text" name='email' value={email} onChange={onSubmit}/>
                    <label>Password</label>
                    <input type="text" name='password' value={password} onChange={onSubmit}/>
                    <label>Birthday</label>
                    <input type="number" name='age' value={age} onChange={onSubmit}/>
                    <label>Age</label>
                    <input type="date" min="14" max="100" name='birthday'value={birthday} onChange={onSubmit}/>
                    <label>Marital St.</label>
                    <input type="text" name='maritalSt' value={maritalSt} onChange={onSubmit}/>
                    <label>Looking for</label>
                    <select name='interest' value={interest} onChange={onSubmit}>
                        <option value="fun">fun</option>
                        <option value="love">love</option>
                        <option value="firendship">firendship</option>
                    </select>
                    <label>City</label>
                    <input type="text" name='city' value={city} onChange={onSubmit}/>
                    <label>Website</label>
                    <input type="text" name='website' value={website} onChange={onSubmit}/> 
                    <button type='submit'>Register</button>
                </form>
            </div>
        
    )
}

export default Form;