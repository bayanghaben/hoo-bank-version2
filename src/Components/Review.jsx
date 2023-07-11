import { quotes } from "../assets";
import { Replays } from "./Replys";
import "./review.css";
// Review component
export function Review({ title, content, date, handleDeletePost, id }) {
  return (
    <div className="review-container sidebar">
      <div className="review-img-con">
        {/* Double quotes image */}
        <img src={quotes} alt="double_quotes" className="review-img" />
        {/* Delete post button */}
        <button onClick={() => handleDeletePost(id)}>
          <i className="fa-solid fa-trash delete-icon"></i>
        </button>
      </div>
      {/* Post content */}
      <p className="review-content ">{content}</p>
      <div className="user-avater-con  grid ">
        {/* User avatar image */}
        <img
          src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          alt=""
          className="user-avatar"
        />
        <div className="review">
          {/* Post title */}
          <h4 className="review-title">{title}</h4>
          {/* Post date */}
          <p className="review-date ">{date}</p>
        </div>
      </div>
      {/* Replays component */}
      <Replays />
    </div>
  );
}
