import React from "react";

const Post = ({ post, handleMinCount, handleBookMartks }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = post;
  return (
    <div>
      <img className="w-full rounded-md" src={cover} alt="" />
      <div className="flex justify-between items-center py-8">
        <div className="flex gap-2 lg:gap-6 items-center">
          <img className="md:w-16 md:h-16" src={author_img} alt="" />
          <div>
            <h3 className="font-bold text-xl mb-1">{author}</h3>
            <p>Posted : {posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p>{reading_time} min read </p>
          <button
            onClick={() => {
              handleBookMartks(`${title}`);
            }}
          >
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-8">{title}</h1>
      <div className="flex gap-3">
        {hashtags.map((tag, key) => (
          <p key={key}>{`#${tag}`}</p>
        ))}
      </div>
      <button
        className=" mt-3 text-blue-600 underline"
        onClick={() => {
          handleMinCount(reading_time);
        }}
      >
        Mark as Readed
      </button>
    </div>
  );
};

export default Post;
