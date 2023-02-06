import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Customer = ({ members }) => {
  const { id } = useParams();

  console.log(id)

  const member = members.find((member) => member.id === id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member && member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Customer;
