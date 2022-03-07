import ModalPost from "./ModaPost/ModalPost";

const Dashboard = () => { 
   
    const comment = {
        name: "Pepe",
        surname: "Lerele",
        date: "24/02/2022",
        img: "https://res.cloudinary.com/ducxt7zb3/image/upload/v1645720753/Floyd-Morris-Remake-1024x879-1_syefe5.jpg",
        comment: "Aporta o Aparta(L)",
      };
    return (
        <div id="profilePost">
        
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
    )
}

export default Dashboard;