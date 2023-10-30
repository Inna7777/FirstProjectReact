import React from "react";

import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
 
  
  return (
    <div>
      <ProfileInfo />

      <MyPost postsData={props.postsData} />
    </div>
  );
};
export default Profile;
