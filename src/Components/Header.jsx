import React, { useContext, useState } from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { ImCompass2 } from "react-icons/im";
import { BsHeart } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import { StateContext } from "./DataLayer/StateProvider";

const Header = () => {
  const { modal, openmodal, user, loading, logout } = useContext(StateContext);

  const opendialog = () => {
    openmodal();
  };
  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    }
  };
  const checkuser = () => {
    return !loading && user ? (
      <li onClick={() => logout()} className="underline">
        {truncate(`${user.displayName}`, 6)}/Logout
      </li>
    ) : (
      <li onClick={opendialog} className="underline">
        Register/Login
      </li>
    );
  };
  return (
    <div className="header">
      <div className="header__first">
        <div className="header__image">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </div>
      </div>

      <div className="header__right">{checkuser()}</div>
    </div>
  );
};

export default Header;
