import React from "react";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";
import comment from "../../assets/comment.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Styled } from "./PostSyled"

const Post = () => {
  const [page, setPage] = useState();
  const navigate = useNavigate();

//   const likePost = async (postId) => {
//     try {
//         let
//     }
//   }

  return (
    <>
      <Styled>
        <section className="container-posts">
          <h6>Enviador por: Bárbara {/*{post?.creator?.name}*/}</h6>
          <p> Olá, que dia lindo!{/*{post.content}*/}</p>
        
        <section className="container-icons">
         
          <div>
            <img src={up} alt="like" /> {/*onClick={() => likePost(post.id)}*/} 
            <h6>2{/*{post.likes}*/}</h6>
            <img src={down} alt="dislike" /> {/*onClick={() => dislikePost(post.id)*/}
            
          </div>
          
          <div
            // onClick={() => {
            //   goToCommentsPage(navigate, {/*post.id*/});
            //   setPage("commentPage");
            // }}
          >
            <img src={comment} alt="" />
            <h6>0{/*{comment.length}}*/}</h6>
          </div>

        </section>
        </section>
      </Styled>
    </>
  );
};

export default Post;
