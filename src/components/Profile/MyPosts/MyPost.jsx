import React from "react";
import p from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = (props)=>{
  
   const postElement = props.postsData.map((el)=> <Post message={el.message} count={el.count } name={el.name} /> )
    return   <div className={p.post}>
      <h3>My posts</h3>
     
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        
        <div className={p.posts}>
       
      {postElement}
        
        </div>
    </div>
 
}
 export default MyPost;