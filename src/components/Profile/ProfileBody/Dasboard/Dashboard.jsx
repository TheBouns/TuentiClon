import { useSelector } from "react-redux";
import ModalPost from "./ModaPost/ModalPost";

const Dashboard = () => { 
   
   const {userData} = useSelector((state)=>state.auth);
   console.log(userData.postId)
    const post  = userData.postId.map(post=>{
      return <p>{post.title}</p>;
    })
    return (
        <div id="profilePost">
        
        <div className="comments">
        
          <span className="commentsInfo">
            <h4 className="userComment">
            {post}
            </h4>
          </span>
          <span className="commentBody">
            
          </span>
          <span className="like">
            <button>👍</button>
            <button>👎</button>
          </span>
        </div>
      </div>
    )
}

export default Dashboard;