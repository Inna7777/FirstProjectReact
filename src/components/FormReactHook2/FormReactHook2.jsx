import React from "react";
import { useForm  } from "react-hook-form";

const FormReactHook2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, //отслеживает переменные
    setValue    
   
  } = useForm(
    //при каких событиях должен срабатывать

    { mode: "onChange" }
  );
  const onSubmit = (data) => {
    // функция принимает все поля формы (обработчик формы)
    alert(`Your name ${data.name}, Your name ${data.email}`);
    reset();
  };

  const watchName = watch('name',)
  React.useEffect(() => { // помогает отследить работу функций и переменных
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    )
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: "Не ввели имя",
          })}
          type="text"
          placeholder="Name"
        />
        {/* Сообщение об ошибке */}
        {errors?.name && (
          <div style={{ color: "red" }}>{errors?.name?.message}</div>
        )}
        {/* <div style={{color: 'red'}}>{errors?.name && <p> {errors?.name?.message || 'Eroor!'}</p>}</div> */}

        <input
          {...register("email", {
            required: "Не правильный mail",
            pattern: {
              value:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
              message: "Введите правильный email",
            },
          })}
          type="text"
          placeholder="email"
        />
        {errors?.email && (
          <div style={{ color: "red" }}>{errors?.email?.message}</div>
        )}
        <button>Отправить</button>
       
      </form> 
      <button onClick={()=> { // заполнить поля определенными значениями
            setValue('name', 'max')
            setValue('email', 'test@mail.ru')
        }}>Fill data</button>
    </div>
  );
};

export default FormReactHook2;
