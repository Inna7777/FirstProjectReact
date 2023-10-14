import React from "react";
import p from "./Post.module.css";

const Post1 = (props) => {
  return (
    <div className={p.item}>
      <img src="https://goo.su/YCqJx" alt="" />
     {props.message} {props.name}
      <div>
        <span>Like {props.count}</span>
      </div>
    </div>
  );
};
export default Post1;
