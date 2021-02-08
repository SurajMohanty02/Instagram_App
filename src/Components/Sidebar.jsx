import { Avatar } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { StateContext } from "./DataLayer/StateProvider";
import "./Sidebar.css";
import InstagramEmbed from "react-instagram-embed";
const Sidebar = () => {
  const { user, progressbar } = useContext(StateContext);
  //console.log(user);
  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    }
  };
  const [arr, setarr] = useState([
    {
      id: 1,
      name: "rudraprasaddassinu",
      status: "follows you",
      follow: "Follow",
    },
    {
      id: 2,
      name: "subhasis_panda",
      status: "follows you",
      follow: "Follow",
    },
    {
      id: 3,
      name: "subhasis_paular",
      status: "follows you",
      follow: "Follow",
    },
    {
      id: 4,
      name: "samal_surya",
      status: "follows you",
      follow: "Follow",
    },
    {
      id: 5,
      name: "armila_swain",
      status: "follows you",
      follow: "Follow",
    },
  ]);
  return (
    <div className="sidebar">
      {user ? (
        <div className="sidebar__container">
          <div className="sidebar__img">
            <span className="image">{truncate(`${user.displayName}`, 1)}</span>
            <div className="sidebar__name">
              <span>{user ? user.email : ""}</span>
              <span>{user ? user.displayName : ""}</span>
            </div>
          </div>
          <div className="list__heading">
            <p className="suggest">Suggestions for you</p>
            <p>See All</p>
          </div>
          <section>
            {arr.map((data) => (
              <div className="bottom__container" key={data.id}>
                <div className="bottom__image">
                  <span className="image">{truncate(`${data.name}`, 1)}</span>
                  <div className="sidebar__name" key={data.id}>
                    <span>{data.name}</span>
                    <span>{data.status}</span>
                  </div>
                </div>
                <p className="follow">{data.follow}</p>
              </div>
            ))}
          </section>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
