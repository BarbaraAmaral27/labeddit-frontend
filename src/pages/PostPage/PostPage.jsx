import React, { useContext, useEffect, useState } from "react";
import { Styled } from "./PostPageStyled";
import HeaderPost from "../../components/HeaderPost/HeaderPost";
import Post from "../../components/Post/Post";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";


const PostPage = () => {
  const { context, posts, setPosts, fetchPosts } = useContext(GlobalContext);
  const params = useParams();

  const [ content, setContent ] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token")
    if (token) {
      context.setIsAuth(true)
    } else {
      goToLoginPage(navigate)
    }
  }, [context]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async () => {
    try {
      const body = {
        content: content,
      };
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("labeddit-token"),
        },
      };
      const response = await axios.post(
        `${BASE_URL}/posts/create`,
        body,
        config
      );
      setPosts(response.data);
      fetchPosts();
    } catch (error) {
      console.log(error?.response?.data);
      window.alert(error?.response?.data); 
    }
  };

  return (
    <>
      <HeaderPost />
      <Styled>
        <section className="container-post">
          <div className="post">
            <input 
              type="text" 
              placeholder="Escreva seu post..." 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              />
          </div>
          <button className="btn-postar" type="submit" onClick={createPost}>Postar</button>
          <hr />
        </section>  
        <section className="container-posts">
          {posts
            .map((post) => {
            return <Post key={post.id} post={post} />
          })
          .reverse()}
        </section>
      </Styled>
    </>
  );
};

export default PostPage;
