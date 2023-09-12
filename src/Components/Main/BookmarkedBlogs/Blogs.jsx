import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ min, bookMarked }) => {
  const [bookLength, setBookLength] = useState(-1);

  useEffect(() => {
    setBookLength(bookLength + 1);
  }, [bookMarked.length]);

  return (
    <div>
      <div className="bg-[#EFEDFD] p-2 lg:p-5 rounded-md">
        <h4 className="text-[16px] lg:text-xl text-center capitalize text-blue-600">
          Spent time on Read : {`${min} min`}
        </h4>
      </div>
      <div className="p-3 bg-slate-300 rounded-md mt-8">
        <h3 className="font-bold text-[18px] mb-3">
          Bookmarked Blogs : {bookLength}
        </h3>
        {bookMarked.map((book, key) => (
          <Blog key={key} book={book}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
