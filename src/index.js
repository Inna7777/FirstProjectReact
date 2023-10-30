import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
  {id:1, message:'Hi, how ara you', count:19, name:'Зоя'},
  {id:2, message:'Hi, how ara you', count:2},
]
 ReactDOM.render(
  <App postsData={postsData}/>,
 

    document.getElementById('root')
);
