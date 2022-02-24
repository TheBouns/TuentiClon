import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileBody from "./ProfileBody/ProfileBody";
const Profile = () => {
  return (
    <div id="profileContainer">
      <ProfileInfo />
      <ProfileBody />
    </div>
  );
};

export default Profile;
