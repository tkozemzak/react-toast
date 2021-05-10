import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Toast.css";

const Toast = ({ toastList, position }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  return (
    <>
      <div className={`notification-container ${position}`}>
        {list.map((toast, i) => {
          return (
            <div
              key={i}
              className={`notification toast ${position}`}
              style={{ backgroundColor: toast.backgroundColor }}
            >
              <button>x</button>
              <div className="notification-image">
                <img src={toast.icon} alt="" />
              </div>
              <div>
                <p className="notification-title">{toast.title}</p>
                <p className="notification-message">{toast.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

Toast.defaultProps = {
  position: "bottom-right",
};

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string,
};

export default Toast;
