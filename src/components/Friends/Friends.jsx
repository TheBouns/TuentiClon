import "./Friends.css";
const Friends = () => {
  const friends = [
    {
      name: "gilbert",
      img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645530886/Logo_tuenti_negativo_color.svg_duiuuz.png",
    },
    {
      name: "gilbert ajksjaksjka",
      img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645530886/Logo_tuenti_negativo_color.svg_duiuuz.png",
    },
    {
      name: "gilbert asoaksoaksoas",
      img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645530886/Logo_tuenti_negativo_color.svg_duiuuz.png",
    },
    {
      name: "gilbertz zxzxz zx",
      img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645530886/Logo_tuenti_negativo_color.svg_duiuuz.png",
    },
    {
      name: "gilbert jsdjsndjs",
      img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645530886/Logo_tuenti_negativo_color.svg_duiuuz.png",
    },
    {
      name: "gilbert jsdjsndjs",
      img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645530886/Logo_tuenti_negativo_color.svg_duiuuz.png",
    },
  ];
  const friend = friends.map((friend) => {
    return (
      <span className="friendInfo">
        <img src={friend.img}></img>
        <p>{friend.name}</p>
      </span>
    );
  });
  return (
    <div id="friendsContainer">
      <h4 className="friendsTitle">My Friends</h4>
      <div className="friendsCard">{friend}</div>
    </div>
  );
};

export default Friends;
