//Complete the necessary code in this file
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
//import App from "../../App.js"

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
const data = props.inputdata;
const [arrayItem, setArrayItem] = useState(data);
console.log(data);
//console.log(setArrayItem(props.inputdata));

  return (
    <div className="posts-container-wrapper">
      {/* map through data here */
        props.inputdata.map(item=>{
          return <Post post = {item}/>
        })

      //<Post post = {props.inputdata[0]} />
        




      }
    </div>
  );
};

export default PostsPage;
