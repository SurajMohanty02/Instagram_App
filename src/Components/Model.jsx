import React, { useContext, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { StateContext } from "./DataLayer/StateProvider";
import "./Model.css";
const Model = () => {
  const { modal, closemodal, register, login } = useContext(StateContext);
  const [state, setstate] = useState({
    Register: true,
    Login: false,
  });
  const [input, setinput] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const formToggle = () => {
    setstate({
      ...state,
      Register: !state.Register,
      Login: !state.Login,
    });
  };
  const closeform = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "modal") {
      // console.log(className);
      closemodal();
    }
  };
  const handelinput = (e) => {
    setinput({
      ...input,
      [e.target.name]: [e.target.value],
    });
    //console.log(input);
  };
  const registeruser = (e) => {
    e.preventDefault();
    register(input);
    setinput({ Name: "", Email: "", Password: "" });
  };
  const loginuser = (e) => {
    e.preventDefault();
    login(input);
    setinput({ Name: "", Email: "", Password: "" });
  };

  return (
    <section>
      {modal ? (
        <div className="modal" onClick={closeform}>
          <div className="modal__container">
            <div className="modal__image">
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </div>
            {state.Register ? (
              <form className="modal__form" onSubmit={registeruser}>
                <div className="modal__formgroup">
                  <input
                    required
                    value={input.Name}
                    onChange={handelinput}
                    name="Name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="modal__formgroup">
                  <input
                    required
                    value={input.Email}
                    onChange={handelinput}
                    name="Email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="modal__formgroup">
                  <input
                    required
                    value={input.Password}
                    onChange={handelinput}
                    name="Password"
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <div className="modal__formgroup">
                  <button type="submit" onClick={registeruser}>
                    Register
                  </button>
                </div>
                <div className="modal__formgroup text" onClick={formToggle}>
                  Already have an account?
                </div>
              </form>
            ) : (
              <form className="modal__form" onSubmit={loginuser}>
                <div className="modal__formgroup">
                  <input
                    required
                    value={input.Email}
                    onChange={handelinput}
                    name="Email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="modal__formgroup">
                  <input
                    required
                    value={input.Password}
                    onChange={handelinput}
                    name="Password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="modal__formgroup">
                  <button type="submit" onClick={loginuser}>
                    Login
                  </button>
                </div>
                <div className="modal__formgroup text" onClick={formToggle}>
                  Register?
                </div>
              </form>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Model;
