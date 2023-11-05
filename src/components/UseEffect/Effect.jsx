import React from "react";

import { useState, useEffect } from 'react';

const Effect =()=> {

  const [count, setCount] = useState(0);
 const [show, setShow] = useState(true);

  function ChangeVisible (){
    setShow((visible) => !visible)
  }
  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;

    return() => {
      document.title = `Delete`
    };
  });

  return (
    <div>
     
     {show && <div><p>Вы нажали { count}  раз</p></div>}
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button> 
      <button onClick={ChangeVisible}>Show/Delete</button>
      <p></p>
    </div>
  );

}

export default  Effect;