import { Link } from "react-router-dom";
import Dashboard from "./Dasboard/Dashboard";
import ModalPost from "./Dasboard/ModaPost/ModalPost";
import { useState } from "react";

import "./ProfileBody.css";
const ProfileBody = () => {
  const [show,setShow] = useState(false);
  const photos = [
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645458097/american-football-g8d3b1aec4_1280_zcxyvr.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645457030/sports-ga86337d90_1920_z6zdtn.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645052832/mediterranean-cuisine-gbcbd05002_1920_qsyjhv.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1638395568/laptop-g700e933ae_1920_wretq3.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1638380917/pier-g7fdbaaba3_1920_dr4wr6.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1638227912/keyboard-ge44634683_1920_thg8ye.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645458097/american-football-g8d3b1aec4_1280_zcxyvr.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645457030/sports-ga86337d90_1920_z6zdtn.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645052832/mediterranean-cuisine-gbcbd05002_1920_qsyjhv.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1638395568/laptop-g700e933ae_1920_wretq3.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1638380917/pier-g7fdbaaba3_1920_dr4wr6.jpg",
    "https://res.cloudinary.com/ducxt7zb3/image/upload/v1638227912/keyboard-ge44634683_1920_thg8ye.jpg",
  ];
  const post = [
    {
      title: "This Rocks!!!༼ つ ◕_◕ ༽つ",
      url: "https://www.youtube.com/embed/JMcNzjzw63I",
    },
    {
      title: "That Good Times",
      url: "https://www.youtube.com/embed/ZxgMGk9JPVA",
    },
  ];

  const image = photos.map((item) => {
    return <img className="image" src={item} />;
  });
  const video = post.map((video) => {
    return (
      <div>
        <h4 className="videoTitle">{video.title}</h4>
        <iframe
          width="280"
          height="164"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          src={video.url}
        ></iframe>
      </div>
    );
  });
  
  return (
    <div id="profileBody">
      <div id="profileButtons">
        <button>🖊 Edit my profile</button>
        <button>📷 Photos</button>
        <button>🎬 My videos</button>
      </div>
      <div id="personalSpace">
        <span className="profileBodyTitle">
          <h4>Mi personal space</h4>
        </span>
        <div className="videosAndPost">{video}</div>
      </div>
      <div id="photosAndAlbums">
        <span className="profileBodyTitle">
          <h4>Photos i am tagged</h4>
          <h4>📷 Albums</h4>
        </span>

        <div id="photos">{image}</div>
        <p className="albumLink">Watch all({photos.length})</p>
      </div>
      <span className="profileBodyTitle">
          <h4>My Dashboard</h4>
          <h4 className="cursor" onClick={()=> setShow(true)}>📰New post</h4>
      </span>
      <Dashboard/>
      <ModalPost onClose={()=> setShow(false)} show={show}/>
    </div>
  );
};

export default ProfileBody;
