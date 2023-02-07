import React, { useState } from "react";
import { FormStyled } from "./FormStyled";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "../UserCard/Card";

const Form = () => {
  const [user, setUser] = useState(null);

  const formSchema = yup.object().shape({
    user: yup.string().required("Nome de usuário obrigatório"),
    username: yup
      .string()
      .required("Nome completo obrigatório")
      .max(18, "Máximo de 18 caracteres"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Insira um email válido"),
    emailconfirm: yup
      .string()
      .required("Confirmação de email obrigatória")
      .email("Insira um email válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(7, "Deve possuir no minimo 7 caracteres"),
    passwordconfirm: yup
      .string()
      .required("Confirmação obrigatória")
      .min(7, "Deve possuir no minimo 7 caracteres"),
    checkbox: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => setUser(data);

  console.log(user)
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
        {...register("emailconfirm")}
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
            {...register("passwordconfirm")}
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
      {user && <Card user={user}/>}
    </FormStyled>
  );
};

export default Form;
