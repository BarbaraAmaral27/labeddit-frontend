import React from "react";
import { Styled } from "./PostPageStyled";
import HeaderPost from "../../components/HeaderPost/HeaderPost";
import Post from "../../components/Post/Post";

const PostPage = () => {
  return (
    <>
      <HeaderPost />
      <Styled>
        <section className="container-post">
          <div className="post">
            <input type="text" placeholder="Escreva seu post..." />
          </div>
          <button className="btn-postar">Postar</button>
          <hr />
        </section>  
        <section className="container-posts">
          <Post/>
          {/* {posts.map((post) => {
            return <Post key={p001} post={post}/>
          })} */}
        </section>

      </Styled>
    </>
  );
};

export default PostPage;
