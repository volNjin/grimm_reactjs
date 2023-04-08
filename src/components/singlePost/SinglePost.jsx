import "./singlepost.css";

export default function SinglePost({title, content}) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          {title}
        </h1>
        <div className="singlePostContent">
          {content}
        </div>
      </div>
    </div>
  );
}