import { profile } from "../../../features/auth/authSlice";
import { useDispatch,useSelector } from "react-redux";
import "./ProfileInfo.css";
import { BsDisplay } from "react-icons/bs";
import { useEffect } from "react";
const ProfileInfo = () => {
  const {userData} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  
  useEffect(()=>{
   dispatch(profile());
  },[])
   const  birth =  (string)=>{
     let birth = "";
     for(let i=0; i<=9; i++){
       birth += string[i];
     }
     return  birth;
   }

   const creation = (string)=>{
     let date = "";
     for(let i=0; i<=9; i++){
       date += string[i];
     }
     return  date;
  }
  
  
  
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
                <li>Name</li>
                <li>Sex</li>
                <li>Birthday</li>
                <li>Age</li>
                <li>Condition</li>
                <li>Search</li>
                <li>City</li>
                <li>Registration</li>
                <li>Web</li>
              </ol>
            </span>
            <span className="answer">
              <ol>
                <li>{userData.name}</li>
                <li>{userData.sex? userData.sex : ":D"}</li>
                <li>{birth(userData.birthday || '')}</li> 
                <li>{userData.age}</li>
                <li>{userData.maritalSt}</li>
                <li>{userData.interest? userData.interest : "?"}</li>
                <li>{userData.city}</li>
                <li>{creation(userData.createdAt|| "")}</li>
                <li>{userData.website? userData.website : ""}</li>
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
