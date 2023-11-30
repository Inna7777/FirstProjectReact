import React from "react";
import { useForm } from "react-hook-form";

const FormReactHook3 = () => {
  const {
    register, //метод который регистрирует поля для формы
    formState: {
      // объект у которого есть св-ва
      errors,
      isValid
    },
    handleSubmit, //обертка для отправки формы
    reset,
  } = useForm(
    {mode:"onBlur"}
  );

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset()
  };

  return (
    <div>
      <h1> React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register("firstName", {
              required: "Поле обязательно к заполнению",
              minLength:{
                value: 5,
                message: "Минимум 5 символов"
              }
            })}
          />
        </label>
        <div>{errors?.firstName && <p>{errors?.firstName?.message || "Erorr!"}</p>}</div>
        <label>
            Last Name:
            <input
            {...register("lastName", {
                required: "Поле обязательно к заполнению",
                minLength:{
                    value: 7,
                    message: "Минимум 7 символов"
                }
            })}
            />
        </label>
        <div>{errors?.lastName && <p>{errors?.lastName.message || "Error!"}</p>}</div>

        <input type="Submit" disabled={!isValid}/>
      </form>
    </div>
  );
};

export default FormReactHook3;
