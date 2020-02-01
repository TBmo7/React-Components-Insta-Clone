/*
Start here and then work through the
PostsContainer components and the CommentSection Components.
Not all files need code added.
Look at each file to see where you need to pass props or add code
*/
import React from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage.js"
import SearchBar from "./components/SearchBar/SearchBarContainer.js"
import dummyData from "./dummy-data.js"
// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = () => {
  //console.log({dummyData});

  // set up state for the dummy data and pass to your PostsPage
  //const data = {dummyData};
  //console.log(data);
  return (

    <div className="App">


      {/* Add components here  and pass props where appropriate */
        <div>
        <SearchBar/>
        <PostsPage data = {dummyData} />
        </div>
      }
    </div>
  );
};

export default App;
