import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBody from "./ProfileBody/ProfileBody";
import Friends from "../Friends/Friends";
const Profile = () => {
  return (
    <div id="profileContainer">
      <ProfileInfo />
      <ProfileBody />
      <Friends />
    </div>
  );
};

export default Profile;
