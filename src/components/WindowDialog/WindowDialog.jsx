import React, {  useState } from "react";
import MyButton from "../Button/MyButton";

import DialogForm from "../DialogForm/DialogForm";


const tapeTariff=[
  {viewTariff:"Vip Tariff", id:"a1"},
  {viewTariff:"Standart Tariff", id:"a2"},
  {viewTariff:"Loyout", id:"a3"}
]

export const WindowDialog = () => {
  const [openwindow, setOpenWindow] = useState(false);
  const [count, setCount] = useState(false);

  function changeResult() {
    setOpenWindow((prev) => !prev);
      }
      function taglleResult() {
        setCount(true);
          }

          // useEffect=(()=>{
          //   if (count === true)
          //   calculator(100);

          // },[count])

    function calculator(namber){
      var result = 0;
      if(namber > 100){
       result = namber*1400
      }else{
        result = namber*1600
      }
       
       
       return(result)     

    }
  return (
    <div>
      <MyButton onClick={changeResult}>Открой окно</MyButton>
      <DialogForm open={openwindow} onCancel={changeResult}>
        <div>
          <p>Это новое окно</p>
        </div>
        <div>
          <form>
            <label for="m2">Введите колво метров:</label>
            <input type="text" name="metr" value=""/><br/>
            <label for="tariff">Выберите тариф:</label><br/>
            {tapeTariff.map((el)=><p><input type="radio" name="tarif" id={el.id}/>{el.viewTariff}</p>)}
            <MyButton onClick={()=>taglleResult()} >Посчитай</MyButton> 
            {count && <div><p>Сумма {calculator(100)}  раз</p></div>}
          </form>
        </div>
      </DialogForm>
     
    </div>
  );
};

export default WindowDialog;