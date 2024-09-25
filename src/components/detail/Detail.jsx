import React from "react";
import "./detail.css";

function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit consectetur.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeAFDJREq0AMzWgajJLLhegrgaUEzBDyYeA&s"
                  alt=""
                />
                <span>photo-2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeAFDJREq0AMzWgajJLLhegrgaUEzBDyYeA&s"
                  alt=""
                />
                <span>photo-2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeAFDJREq0AMzWgajJLLhegrgaUEzBDyYeA&s"
                  alt=""
                />
                <span>photo-2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeAFDJREq0AMzWgajJLLhegrgaUEzBDyYeA&s"
                  alt=""
                />
                <span>photo-2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeAFDJREq0AMzWgajJLLhegrgaUEzBDyYeA&s"
                  alt=""
                />
                <span>photo-2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeAFDJREq0AMzWgajJLLhegrgaUEzBDyYeA&s"
                  alt=""
                />
                <span>photo-2024_2.png</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
}

export default Detail;
