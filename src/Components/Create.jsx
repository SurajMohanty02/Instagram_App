import React, { useContext, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import "./Create.css";
import { StateContext } from "./DataLayer/StateProvider";
const Create = () => {
  const [input, setinput] = useState("");
  const [image, setimage] = useState("");
  const { create, user } = useContext(StateContext);

  const handelsubmit = (e) => {
    e.preventDefault();

    create({ image, input });
    setinput("");
    setimage("");
  };
  const handelimage = (e) => {
    setimage(e.target.files[0]);
  };
  return (
    <section>
      {user ? (
        <div className="create">
          <form className="create__container" onSubmit={handelsubmit}>
            <div className="create__top">
              <input
                type="text"
                placeholder="What's in your mind"
                onChange={(e) => setinput(e.target.value)}
                required
                value={input}
              />
            </div>
            <div className="create__bottom">
              <input
                type="file"
                id="file"
                onChange={handelimage}
                accept="image/*"
              />

              <label htmlFor="file">
                <AiFillCamera fontSize="x-large" id="camera" />
              </label>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Create;
