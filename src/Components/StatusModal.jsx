import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { StateContext } from "./DataLayer/StateProvider";
import "./StatusModal.css";
const StatusModal = () => {
  const { status, preview, closepreview } = useContext(StateContext);
  // console.log(status);
  return (
    <section>
      {preview ? (
        <div className="status">
          <div className="status__container">
            <AiFillCloseCircle
              fontSize="x-large"
              onClick={() => closepreview()}
              id="close"
            />
            <div className="status__image">
              <img src={status.image} alt="" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default StatusModal;
