import React from "react";
import p from "./Profile.module.css";
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Post = () => {
  return (
    <div>
      <ProfileInfo />

      <MyPost />
    </div>
  );
};
export default Post;
