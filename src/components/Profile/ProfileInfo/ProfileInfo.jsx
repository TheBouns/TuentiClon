import "./ProfileInfo.css";
const ProfileInfo = () => {
  return (
    <div id="infoContainer">
      <div className="imgContainer">
        <img
          className="imgBio"
          src="https://res.cloudinary.com/ducxt7zb3/image/upload/v1645720753/Floyd-Morris-Remake-1024x879-1_syefe5.jpg"
          placeholder="profile picture"
        ></img>
      </div>

      <div id="conections">
        <h3 className="profileInfoTitle">My conections</h3>
        <h4>Studies</h4>
        <p>Lore ipsum University </p>
      </div>
      <div id="info">
        <h3 className="profileInfoTitle">Information</h3>
        <div className="title">
          <h4>Personal</h4>
          <div id="information">
            <span className="titleAnswer">
              <ol>
                <li>Sex</li>
                <li>Birthday</li>
                <li>Age</li>
                <li>Marital St.</li>
                <li>Looking for</li>
                <li>City</li>
                <li>Registration</li>
                <li>Web</li>
              </ol>
            </span>
            <span className="answer">
              <ol>
                <li>Yes,please</li>
                <li>23/08/1990</li>
                <li>32</li>
                <li>Single</li>
                <li>Whatever</li>
                <li>Villareal</li>
                <li>---</li>
                <li>Xvideos.com</li>
              </ol>
            </span>
          </div>
        </div>
        <div className="answer"></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
