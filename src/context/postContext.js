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

  const getPost = async (id) => {
    try {
      const res = await getPostsRequest(id);
      setPosts(res.data)
      
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (post) =>{
    const res = await createPostsRequest (post)
    setPosts ([...posts, res.data])
  }

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  }; 

  
  const getPosts = async (id) => {
    const res = await getPostRequest (id)
    return res.data
  }

  const updatePost = async (id, post) => {
    try {
      const res = await updatePostRequest(id, post);
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