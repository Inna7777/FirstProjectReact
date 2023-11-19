import React from "react";
import { useForm } from "react-hook-form"
import style from './FormReactHook.module.css'


const FormReactHook = () => {

    const {
        register, //позволяет регистрировать различные поля для формы
        formState: { //объект у которого есть различные свойства
            errors, //свойство проверки на ошибки
            isValid 
        },
        handleSubmit, //обертка для формы для валидация
        reset, //очистка формы после отправки
    } = useForm({
        mode:"onBlur"  // установка режима вызова хука(при нажатии на кнопку(стоит по умолчанию) 
                      // или при выходе из поля формы или всего 5 режимов)
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();

    }

    return (
        <div className={style.formReact}>
            <h1> React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input
                        {...register("firstName",{
                            required: "Поле обязательно к заполнению", //проверка на заполнение формы
                            minLength: { // проверка на заполнение ко-во введенных символов
                                value:4,
                                message: 'минимум 4 символа'
                            }
                        })}//метод который прописан в useForm,который возвращает объект
                    />
                </label><br/>
                <div style={{height:40}}>{errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}</div>
                <div>
                <label>
                    Last Name:
                    <input
                        {...register("lastName",{
                            required: "Поле обязательно к заполнению", //проверка на заполнение формы
                            minLength: {
                                value:4,
                                message: 'минимум 4 символа'
                            }
                        })}//метод который прописан в useForm,который возвращает объект

                    />
                </label><br/>
                <div style={{height:40}}>{errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}</div>
                </div>
                <div>
                    <input type="submit" value="Кнопка" disabled={!isValid} />
                </div>


            </form>

        </div>
    )

}

export default FormReactHook;