import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./DataLayer/StateProvider";
import db from "./firebase";

const Comment = (props) => {
  const [comment, setcomment] = useState([]);
  const [getcomment, setgetcomment] = useState([]);
  const { publishcomment, user, loading } = useContext(StateContext);
  const handelcomment = (e) => {
    e.preventDefault();
    publishcomment({ id: props.id, comment });
    setcomment("");
  };
  useEffect(() => {
    db.collection("post")
      .doc(props.id)
      .collection("comment")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        setgetcomment(snapshot.docs.map((info) => info.data()));
      });
  });

  return (
    <React.Fragment>
      <div className="show">
        {getcomment.map((info) => (
          <div className="comment" key={info.id}>
            <span className="name">{info.username}</span>
            <span className="cmt">{info.comment}</span>
            <span>
              {info.time
                ? new Date(info.time.toDate()).toLocaleTimeString()
                : ""}
            </span>
          </div>
        ))}
      </div>
      <section>
        {user ? (
          <form className="post__inputcoment" onSubmit={handelcomment}>
            <input
              type="text"
              placeholder="Add a comment"
              onChange={(e) => {
                setcomment(e.target.value);
              }}
              value={comment}
            />
            <button type="submit">Post</button>
          </form>
        ) : (
          ""
        )}
      </section>
    </React.Fragment>
  );
};

export default Comment;
