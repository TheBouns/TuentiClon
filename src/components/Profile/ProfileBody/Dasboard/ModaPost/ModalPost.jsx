import { useState } from 'react';
import './ModalPost.css'
import { useDispatch } from 'react-redux';
import { create } from '../../../../../features/posts/postSlice';

const ModalPost = (props)=>{
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
        dispatch(create(formData))
    }
    if(!props.show) return null
    return (
        <div className='modalContainer'>
              <div className='modalForm'>
                <form onSubmit={submitInfo}>
                    <input type="text" name="title" value={title} onChange={onSubmit} placeholder="Title"/>
                    <input type="text" name="description"value={description} onChange={onSubmit} placeholder="Description"/>
                    <button type='submit'>Send</button>
                </form>
            </div>  
            <button onClick={props.onClose}>Close</button>
        </div>
    )
  }
export default ModalPost;