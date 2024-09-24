import React, { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [open, setopen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setopen(false);
  };

  return (
    <>
      <div className="chat">
        <div className="top">
          <div className="user">
            <img src="./avtar.png" alt="" />
            <div className="texts">
              <span>Jane Doe</span>
              <p>Lorem ipsum dolor,sit amer</p>
            </div>
          </div>
          <div className="icons">
            <img src="./phone.png" alt="" />
            <img src="./video.png" alt="" />
            <img src="./info.png" alt="" />
          </div>
        </div>
        <div className="center">
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                assumenda odit dolor ab ducimus reprehenderit, voluptas,
                corporis enim ex minus molestiae officia saepe! Molestias
                numquam necessitatibus maxime, eaque repudiandae inventore!
              </p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className="message own">
            <div className="texts">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                assumenda odit dolor ab ducimus reprehenderit, voluptas,
                corporis enim ex minus molestiae officia saepe! Molestias
                numquam necessitatibus maxime, eaque repudiandae inventore!
              </p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                assumenda odit dolor ab ducimus reprehenderit, voluptas,
                corporis enim ex minus molestiae officia saepe! Molestias
                numquam necessitatibus maxime, eaque repudiandae inventore!
              </p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className="message own">
            <div className="texts">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                assumenda odit dolor ab ducimus reprehenderit, voluptas,
                corporis enim ex minus molestiae officia saepe! Molestias
                numquam necessitatibus maxime, eaque repudiandae inventore!
              </p>
              <span>1 min ago</span>
            </div>
          </div>
          <div className="message">
            <img src="./avatar.png" alt="" />
            <div className="texts">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                assumenda odit dolor ab ducimus reprehenderit, voluptas,
                corporis enim ex minus molestiae officia saepe! Molestias
                numquam necessitatibus maxime, eaque repudiandae inventore!
              </p>
              <span>1 min ago</span>
            </div>
          </div>

          <div className="message own">
            <div className="texts">
              <img
                src="data:image/jpeg;base64,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"
                alt="home"
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
                assumenda odit dolor ab ducimus reprehenderit, voluptas,
                corporis enim ex minus molestiae officia saepe! Molestias
                numquam necessitatibus maxime, eaque repudiandae inventore!
              </p>
              <span>1 min ago</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="icons"></div>
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
          <input
            type="text"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="emoji">
            <img
              src="./emoji.png"
              alt=""
              onClick={() => setopen((prev) => !prev)}
            />
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji} />
            </div>
          </div>
          <button className="sendButton">Send</button>
        </div>
      </div>
    </>
  );
}

export default Chat;
