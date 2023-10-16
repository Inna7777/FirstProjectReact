import React from "react";
import p from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = ()=>{
    return   <div className={p.post}>
      My posts
      <div>
          New post
        </div>
        <Post message="Hi, how ara you" count="19" name="Зоя"/>
        <Post message="Hi, it my post" count="20"/>
    </div>
 
}
 export default MyPost;