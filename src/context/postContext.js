import { createContext, useContext, useEffect, useState } from "react";
import {
  getPostsRequest,
  createPostsRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
  getFeaturedPostsRequest
} from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};


export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const [featuredPosts, setFeaturedPosts] = useState([]);

  const getPost = async (query = '') => {
    try {
      const res = await getPostsRequest(query);
      setPosts(res.data)
      
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (post, token) =>{
    const res = await createPostsRequest (post, token)
    setPosts ([...posts, res.data])
  }

  const deletePost = async (id, token) => {
    const res = await deletePostRequest(id, token);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  }; 

   
  const getPosts = async (id) => {
    const res = await getPostRequest (id)
    return res.data
  }

  const updatePost = async (id, post, token) => {
    try {
      const res = await updatePostRequest(id, post, token);
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  const getFeaturedPosts = async () => {
    try {
      const res = await getFeaturedPostsRequest();
      setFeaturedPosts(res.data)
      
    } catch (error) {
      console.error(error);
    }
  };



  useEffect (() => {
        getPost()
        getFeaturedPosts()
  }, [])



  return (
    <postContext.Provider
      value={{ posts, featuredPosts, getPosts, createPost, deletePost, getPost, updatePost, getFeaturedPosts }}
    >
      {children}
    </postContext.Provider>
  );
};