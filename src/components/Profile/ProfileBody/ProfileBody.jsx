import { Link } from "react-router-dom";
import "./ProfileBody.css";
const ProfileBody = () => {
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
  const comment = {
    name: "Pepe",
    surname: "Lerele",
    date: "24/02/2022",
    img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645720753/Floyd-Morris-Remake-1024x879-1_syefe5.jpg",
    comment: "Aporta o Aparta(L)",
  };
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
          <h4>📰New post</h4>
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
      <div id="profilePost">
        <span className="profileBodyTitle">
          <h4>My Dashborad</h4>
        </span>
        <div className="comments">
          <span className="commentsInfo">
            <img src={comment.img} />
            <h4 className="userComment">
              {comment.name}
              {comment.surname}
            </h4>
            <h3 className="date">{comment.date}</h3>
          </span>
          <span className="commentBody">
            <p>{comment.comment}</p>
          </span>
          <span className="like">
            <button>👍</button>
            <button>👎</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
