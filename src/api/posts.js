import axios from "axios";


export const getPostsRequest = async (query) => await axios.get("https://shows-9tkg.onrender.com/posts", {params:{query}});

export const createPostsRequest = async (post, token) => await axios.post("https://shows-9tkg.onrender.com/posts", post,  {headers: {'auth-token': token}});

export const deletePostRequest = async (id, token) => await axios.delete("https://shows-9tkg.onrender.com/posts/" + id, {headers: {'auth-token': token}}); 

export const getPostRequest = async (id) => await axios.get("https://shows-9tkg.onrender.com/posts/" + id);

export const updatePostRequest = async (id, newPostFields, token) => 
    await axios.put(`https://shows-9tkg.onrender.com/posts/${id}`, newPostFields, {headers: {'auth-token': token}});


export const getFeaturedPostsRequest = async () => await axios.get("https://shows-9tkg.onrender.com/featured-posts");