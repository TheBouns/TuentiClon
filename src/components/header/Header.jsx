import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImArrowUp } from "react-icons/im";
import "./Header.css";
const Header = () => {
  return (
    <nav className="headerContainer">
      <div className="headerMenu">
        <img
          alt="logo"
          src="https://res.cloudinary.com/ducxt7zb3/image/upload/v1645532143/tuentiTransparente_tozqdb.png"
        ></img>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/people">People</Link>
        <Link to="/videos">Videos</Link>
        <div className="headerSearch">
          <input type="search" placeholder="Search"></input>
          <button className="glass">
            <BiSearchAlt2 />
          </button>
        </div>
        <button className="upload">
          Upload Photos <ImArrowUp />
        </button>
      </div>
      <p className="headerMyAccount">Logout</p>
    </nav>
  );
};

export default Header;
