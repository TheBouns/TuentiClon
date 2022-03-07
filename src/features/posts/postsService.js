import axios from 'axios'
const API_URI  = "http://localhost:3005";

const create = async(data)=>{
    const res = await axios.post(API_URI+"/posts",data,{
        headers:{
            authorization:user?.token,
        },
    });
}
const postService = {
    create,
}

export default postService;