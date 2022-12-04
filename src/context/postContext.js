import { createContext, useContext, useEffect, useState } from "react";
import { getPostsRequest, createPostsRequest } from "../api/posts";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPost = async (id) => {
    try {
      const res = await getPostsRequest(id);
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (post) => {
    const res = await createPostsRequest(post);
    setPosts([...posts, res.data]);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <postContext.Provider value={{ posts, getPost, createPost }}>
      {children}
    </postContext.Provider>
  );
};