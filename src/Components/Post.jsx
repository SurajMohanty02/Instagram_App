import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { StateContext } from "./DataLayer/StateProvider";

import "./Post.css";
import Comment from "./Comment";
const Post = () => {
  const { posts } = useContext(StateContext);
  //console.log(posts);
  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    }
  };
  return (
    <section>
      {posts.map((info) => (
        <div className="post" key={info.id}>
          <div className="post__container">
            <div className="post__first">
              <div className="profile">
                <span className="image">
                  {truncate(`${info.data.username}`, 1)}
                </span>
                <div className="nametime">
                  <span>{info.data.username}</span>
                  <span>
                    {info.data.time
                      ? new Date(info.data.time.toDate()).toLocaleTimeString()
                      : ""}
                  </span>
                </div>
              </div>
              <BsThreeDots />
            </div>
            <div className="text">
              <span>{info.data.Text}</span>
            </div>
            {info.data.image ? (
              <div className="post__image">
                <img src={info.data.image} alt="" />
              </div>
            ) : (
              ""
            )}

            <Comment id={info.id} />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Post;
