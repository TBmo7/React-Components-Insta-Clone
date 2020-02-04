import React, {useState} from 'react';

const LikeSection = props => {
  const [likes, setLikes] = useState(props.currentlikes);
  const moreLikes = () => {
    setLikes(likes +1);
  }
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <button onClick = {()=> moreLikes()}>
        <i  className="far fa-heart" />
        </button>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
     {likes} likes</p>
</div>
  )
};

export default LikeSection;
