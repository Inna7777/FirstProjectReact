import React from "react";
import p from './MyPost.module.css'
import Post1 from "./Post/Post1";


const MyPost = ()=>{
    return   <div className={p.post}>
      My posts
      <div>
          New post
        </div>
        <Post1 message="Hi, how ara you" count="19"/>
        <Post1 message="Hi, it my post" count="20"/>
    </div>
 
}
 export default MyPost;