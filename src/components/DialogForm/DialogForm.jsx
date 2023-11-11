import React from "react";
import style from "./DialogForm.module.css"

const DialogForm =(props)=>{
     return(
        props.open && (
            <div className={style.dialogForm}>
                <div className={style.popup}>
                    <div className={style.cansel}>
                         <button onClick={props.onCancel}>X</button>
                    </div>
                    {props.children}

                </div>

            </div>
        )
     )
}

export default DialogForm;