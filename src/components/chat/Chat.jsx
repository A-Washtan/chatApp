import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null)

  useEffect(() => {
endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoje = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      {/* top */}
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Washtan</span>
            <p>Lorem ipsum dolor sit .</p>
          </div>
        </div>
        <div className="topicons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      {/* center */}
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, ducimus modi, autem optio necessitatibus dolorem
            perspiciatis ea enim tempore temporibus ipsam at nemo veritatis
            quisquam sed magni repudiandae doloremque voluptatem.
          </p>
          <span>قبل واحد دقيقة</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, ducimus modi, autem optio necessitatibus dolorem
            perspiciatis ea enim tempore temporibus ipsam at nemo veritatis
            quisquam sed magni repudiandae doloremque voluptatem.
          </p>
          <span>قبل واحد دقيقة</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, ducimus modi, autem optio necessitatibus dolorem
            perspiciatis ea enim tempore temporibus ipsam at nemo veritatis
            quisquam sed magni repudiandae doloremque voluptatem.
          </p>
          <span>قبل واحد دقيقة</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, ducimus modi, autem optio necessitatibus dolorem
            perspiciatis ea enim tempore temporibus ipsam at nemo veritatis
            quisquam sed magni repudiandae doloremque voluptatem.
          </p>
          <span>قبل واحد دقيقة</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, ducimus modi, autem optio necessitatibus dolorem
            perspiciatis ea enim tempore temporibus ipsam at nemo veritatis
            quisquam sed magni repudiandae doloremque voluptatem.
          </p>
          <span>قبل واحد دقيقة</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="./avatar.png" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, ducimus modi, autem optio necessitatibus dolorem
            perspiciatis ea enim tempore temporibus ipsam at nemo veritatis
            quisquam sed magni repudiandae doloremque voluptatem.
          </p>
          <span>قبل واحد دقيقة</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, ducimus modi, autem optio necessitatibus dolorem
            perspiciatis ea enim tempore temporibus ipsam at nemo veritatis
            quisquam sed magni repudiandae doloremque voluptatem.
          </p>
          <span>قبل واحد دقيقة</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      {/* bottom */}
      <div className="bottom">
        <div className="bottomicons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="اكتب هنا"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <EmojiPicker
            open={open}
            onEmojiClick={handleEmoje}
            className="picker"
          />
        </div>
        <button className="sendButton">ارسال</button>
      </div>
    </div>
  );
}

export default Chat;
