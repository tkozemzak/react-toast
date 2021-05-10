import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Toast.css";

const Toast = ({ toastList, position, autoDelete, autoDeleteTime }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    console.log("use effect - set interval");
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);
    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  const deleteToast = (id) => {
    const index = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);

    list.splice(index, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

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
              <button onClick={() => deleteToast(toast.id)}>X</button>
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

Toast.propTypes = {
  toastList: PropTypes.array.isRequired,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number,
};

export default Toast;
