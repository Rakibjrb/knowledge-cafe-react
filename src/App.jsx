import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Posts from "./Components/Main/Posts";
import Blogs from "./Components/Main/BookmarkedBlogs/Blogs";

function App() {
  const [min, setMin] = useState(0);
  const [bookMarked, setBookMarked] = useState([]);

  const handleMinCount = (time) => {
    setMin(min + time);
  };

  const handleBookMartks = (title) => {
    setBookMarked([...bookMarked, title]);
  };

  return (
    <div className="max-w-screen-xl mx-auto container px-4">
      <Header></Header>
      <div className="flex gap-6 mt-10 flex-col-reverse md:flex-row">
        <div className="md:w-4/6 lg:w-3/4">
          <Posts
            handleMinCount={handleMinCount}
            handleBookMartks={handleBookMartks}
          ></Posts>
        </div>
        <div className="md:w-1/3 lg:w-1/4">
          <Blogs min={min} bookMarked={bookMarked}></Blogs>
        </div>
      </div>
    </div>
  );
}

export default App;
