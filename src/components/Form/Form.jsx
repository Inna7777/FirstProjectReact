import React from "react";


const Forms = ()=>{

    return(

        <form action="#" method="post" enctype="multipart/form-data">
            
            <div>
                <p>Имя</p>
                <input tabIndex="1" name ="username" type ="text"/>
            </div>
            <div>
                <p>Пароль</p>
                <input tabIndex="2" name ="userpass" type ="password" maxLength={8} minLength={6}/>                
            </div>
            <div>
                <p>Telefon</p>
                <input tabIndex="3" name ="usertel" type ="tel" />                
            </div>
            <div>
                <p>Sex</p>
                <div>
                     <input tabIndex="4" checked name ="gender" type ="radio"  value="female"/> Мужской  
                </div>
                <div>
                     <input  tabIndex="4" name ="gender" type ="radio"  value="female"/>   Женский
                </div>
                <div>
                <p>Имущество</p>
                <input tabIndex="5" checked  name ="bike" type ="checkbox"  value="yes"/>  Велик  
                <input tabIndex="6" name ="bike" type ="checkbox"  value=""/>  Мотоцикл 
                <input tabIndex="7" disabled name ="bike" type ="checkbox"  value="yes"/>  Машина              
            </div>
            <div>
                <p>Дополнительная информация</p>
                <textarea name="text" tabIndex="8"></textarea>               
            </div>
            <div>
                <p>Прикрепить фото </p>
                <input tabIndex="9" type="file"/>                
            </div>
            <div>
                <p>Любимый цвет </p>
                <select name = "color" tabIndex="10" >
                    <option value="red">Красный</option>
                    <option value="yellow">Желтый</option>
                    <option  selected value="green">Зеленый</option>
                    
                    </select>               
            </div>
            <div>
                <p>Действие </p>
                <button tabIndex="11" type="submit">Отправить</button> 
                <button tabIndex="12" type="reset">Очистить</button>                
            </div>
            <div>
                <p>Прикрепить фото </p>
                <input tabIndex="9" type="file"/>                
            </div>
                            
            </div>

        </form>
 
 
        

    )
}

export default Forms;