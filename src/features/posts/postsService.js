import axios from 'axios'
const API_URI  = "http://localhost:3005";

const create = async(data)=>{
    const user = JSON.parse(localStorage.getItem("user"))
    const res = await axios.post(API_URI+"/posts",data,{
        headers:{
            authorization: user?.token ,
        },
    });
}

const myPosts = async (user)=>{
    const res = await axios.get(API_URI+"/users/options/myprofile",{
        headers:{
            authorization: user?.token
        }
    })
}
const postService = {
    create,
    myPosts
}

export default postService;