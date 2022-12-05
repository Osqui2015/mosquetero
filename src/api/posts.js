import axios from "axios";


export const getPostsRequest = async (query) => await axios.get("/posts", {params:{query}});

export const createPostsRequest = async (post, token) => await axios.post("/posts", post,  {headers: {'auth-token': token}});

export const deletePostRequest = async (id, token) => await axios.delete("/posts/" + id, {headers: {'auth-token': token}}); 

export const getPostRequest = async (id) => await axios.get("/posts/" + id);

export const updatePostRequest = async (id, newPostFields, token) => 
    await axios.put(`/posts/${id}`, newPostFields, {headers: {'auth-token': token}});


export const getFeaturedPostsRequest = async () => await axios.get("/featured-posts");