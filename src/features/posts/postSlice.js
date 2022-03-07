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