import React, { createContext, useEffect, useState } from "react";
import db, { auth, storage } from "../firebase";
import firebase from "firebase";
export const StateContext = createContext();

export const StateProvider = (props) => {
  const [modal, setmodal] = useState(false);
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(true);
  const [status, setstatus] = useState([]);
  const [preview, setpreview] = useState(false);
  const [data, setdata] = useState({});
  const [posts, setposts] = useState([]);
  const [comments, setcomments] = useState([]);
  const [progressbar, setprogressbar] = useState("");

  const openpreview = () => {
    setpreview(true);
  };
  const closepreview = () => {
    setpreview(false);
  };
  const openmodal = () => {
    setmodal(true);
  };
  const closemodal = () => {
    setmodal(false);
  };
  const register = async (user) => {
    const { Name, Email, Password } = user;

    try {
      const res = await auth.createUserWithEmailAndPassword(
        Email[0],
        Password[0]
      );
      res.user.updateProfile({ displayName: Name[0] });

      setmodal(false);
    } catch (error) {
      alert("Error occured", error);
    }
  };
  useEffect(() => {
    db.collection("post")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        setposts(
          snapshot.docs.map((info) => ({
            id: info.id,
            data: info.data(),
          }))
        );
      });
  }, [user, loading]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setuser(user);
      setloading(false);
    });
  });
  const login = async (user) => {
    const { Email, Password } = user;
    const res = await auth.signInWithEmailAndPassword(Email[0], Password[0]);

    // console.log("login", res);
    setmodal(false);
  };
  const logout = () => {
    auth
      .signOut()
      .then(() => setuser(""))
      .catch((error) => console.log(error));
  };
  const statusdata = (data) => {
    setstatus(data);
  };
  const create = (data) => {
    if (data.image.name) {
      const uploadTask = storage
        .ref(`images/${data.image.name}`)
        .put(data.image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setprogressbar(progress);
          console.log(progress);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          storage
            .ref("images")
            .child(data.image.name)
            .getDownloadURL()
            .then((url) => {
              db.collection("post").add({
                Text: data.input,
                image: url,
                username: user.displayName,
                time: firebase.firestore.FieldValue.serverTimestamp(),
              });
            });
        }
      );
    } else {
      db.collection("post").add({
        Text: data.input,
        image: null,
        username: user.displayName,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };
  const publishcomment = (comments) => {
    const { id, comment } = comments;
    //console.log(id);
    db.collection("post").doc(id).collection("comment").add({
      comment,
      username: user.displayName,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <StateContext.Provider
      value={{
        modal,
        openmodal,
        closemodal,
        register,
        login,
        user,
        loading,
        logout,
        statusdata,
        status,
        openpreview,
        closepreview,
        preview,
        create,
        posts,
        publishcomment,
        progressbar,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

//Returning the value who want
