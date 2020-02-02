//Complete the necessary code in this file
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import App from "../../App.js"

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
const data = props;
const [arrayItem, arrayItemIndex] = useState(props.inputdata);
console.log(props.inputdata);
//console.log(arrayItem.inputdata[1]);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here */

      <Post post = {props.inputdata[0]} />




      }
    </div>
  );
};

export default PostsPage;
