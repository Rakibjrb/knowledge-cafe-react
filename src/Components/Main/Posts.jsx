import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = ({ handleMinCount, handleBookMartks }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Rakibjrb/fakeapi-for-test/master/knowladge-cafe.json"
    )
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);

  return (
    <div className="flex flex-col gap-20 mb-20">
      {data.map((post, key) => (
        <Post
          key={key}
          post={post}
          handleMinCount={handleMinCount}
          handleBookMartks={handleBookMartks}
        ></Post>
      ))}
    </div>
  );
};

export default Posts;
