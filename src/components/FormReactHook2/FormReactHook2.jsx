import React from "react";
import { Controller, useForm  } from "react-hook-form";
import  ReactSelect from "react-select";

const options = [
  { value: 'Russia', label: 'Russia' },
  { value: 'USA', label: 'USA' },
  { value: 'French', label: 'Franch' }
];

const getValue = (value) => {
  return (
    value ? options.find((option) => option.value === value) : ''
  );
}

const FormReactHook2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch, //отслеживает переменные
    setValue,
    control
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    alert(`Your name ${data.name}, Your email ${data.email}`);
    reset();
  };

  const watchName = watch('name');

  React.useEffect(() => {
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
        {errors?.name && (
          <div style={{ color: "red" }}>{errors?.name?.message}</div>
        )}

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

        <Controller
          control={control}
          name="adress.country"
          rules={{
            required: 'Country is required!',
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <ReactSelect
                placeholder='Countries'
                options={options}
                value={getValue(value)}
                onChange={(newValue) => onChange(newValue.value)}
              />
              {error && <div style={{ color: "red" }}>{error.message}</div>}
            </div>
          )}
        />

        <div>
          <button>Отправить</button>
        </div>
      </form>
      <button onClick={() => {
        setValue('name', 'max');
        setValue('email', 'test@mail.ru');
      }}>Fill data</button>
    </div>
  );
};

export default FormReactHook2;