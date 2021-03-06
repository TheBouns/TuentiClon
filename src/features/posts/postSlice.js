import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postsService";

const user = JSON.parse(localStorage.getItem("user"));

const initialState={
    user: user? user :null,
    posts:[]
}

export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{},
})

export const create = createAsyncThunk(
    "post/create",
    async (data)=>{
        try {
            return postService.create(data);
        } catch (error) {
            console.error(error)
        }
    }
)

export const myPost = createAsyncThunk(
    "post/myPost",
    async(user)=>{
        try {
            return postService.myPost(user)
        } catch (error) {
            console.error(error)
            
        }
    }
)

export default postsSlice.reducer;