import React from "react";
import p from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = ()=>{
  let postsData = [
    {id:1, message:'Hi, how ara you', count:19, name:'Зоя'},
    {id:2, message:'Hi, how ara you', count:2},
    
   ]
    return   <div className={p.post}>
      <h3>My posts</h3>
     
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        
        <div className={p.posts}>
        <Post message={postsData[0].message} count={postsData[0].count } name={postsData[0].name} />
        <Post message={postsData[1].message} count={postsData[1].count} />
        
        </div>
    </div>
 
}
 export default MyPost;