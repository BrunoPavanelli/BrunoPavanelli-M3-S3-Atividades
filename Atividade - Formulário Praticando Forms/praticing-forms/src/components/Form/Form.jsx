import React from "react";
import { FormStyled } from "./FormStyled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = () => {
  const formSchema = yup.object().shape({
    user: yup.string().required("Nome de usuário obrigatório"),
    username: yup.string().required("Nome completo obrigatório"),
    email: yup.string().required("Email obrigatório"),
    emailconfirm: yup.string().required("Confirmação de email obrigatória"),
    password: yup.string().required("Senha obrigatória"),
    passwordconfirm: yup.string().required("Confirmação obrigatória"),
    checkbox: yup.boolean().isTrue("Por favor, confirme os termos de uso"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  
  const onSubmitFunction = (data) => console.log(data);
  return (
    <FormStyled onSubmit={handleSubmit(onSubmitFunction)}>
      <input type="text" placeholder="Nome de Usuário*" {...register("user")} />
      {errors.name?.message}
      <input
        type="text"
        placeholder="Nome Completo*"
        {...register("username")}
      />
      {errors.username?.message}
      <input type="email" placeholder="E-mail*" {...register("email")} />
      {errors.email?.message}
      <input
        type="email"
        placeholder="Confirmar E-mail*"
        {...register("email")}
      />
      {errors.emailconfirm?.message}
      <div className="password">
        <div>
          <input
            type="password"
            placeholder="Senha*"
            {...register("password")}
          />
          {errors.password?.message}
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirmar Senha*"
            {...register("password")}
          />
          {errors.passwordconfirm?.message}
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" {...register("accept")} />
        {errors.checkbox?.message}
        <label>Eu aceito os termos de uso da aplicação</label>
      </div>
      <button type="submit">CADASTRAR</button>
    </FormStyled>
  );
};

export default Form;
