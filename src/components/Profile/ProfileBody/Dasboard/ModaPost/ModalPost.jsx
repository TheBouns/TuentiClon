import { useState } from 'react';
import './ModalPost.css'
import { useDispatch } from 'react-redux';

const ModalPost = (props)=>{
    // if(!props.show) return null;
    const [formData, setData] = useState({
        title:"",
        description:"",
    })
    const {title,description} = formData;
    const onSubmit = (event)=>{
        setData((prevState)=>({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }
    const dispatch = useDispatch();
    const submitInfo = (event)=>{
        event.preventDefault()
        console.log("formdata",formData);
        dispatch(register(formData))
    }
    return (
        <div className='modalContainer'>
              <div className='modalForm'>
                <form onSubmit={submitInfo}>
                    <input type="text" value={title} onChange={onSubmit}>Title</input>
                    <input type="text" value={description} onChange={onSubmit}>Description</input>
                    <button type='submit'>Send</button>
                </form>
            </div>  
            <button onClick={props.onClose}>Close</button>
        </div>
    )
  }
export default ModalPost;