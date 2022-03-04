import { Link,useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImArrowUp } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=> state.auth)
  const onLogout =(event)=>{
    event.preventDefault();
    dispatch(logout());
    navigate("/")
  }
  
  return (
    <nav className="headerContainer">
      <div className="headerMenu">
        <img
          alt="logo"
          src="https://res.cloudinary.com/ducxt7zb3/image/upload/v1645532143/tuentiTransparente_tozqdb.png"
        ></img>
        <Link to="/tuenti/home">Home</Link>
        <Link to="/tuenti/profile">Profile</Link>
        <Link to="/tuenti/messages">Messages</Link>
        <Link to="/tuenti/people">People</Link>
        <Link to="/tuenti/videos">Videos</Link>
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
      {user?
      <Link to="/" className="headerMyAccount" onClick={onLogout}>Logout</Link>:
      ""
      }
      
    </nav>
  );
};

export default Header;
