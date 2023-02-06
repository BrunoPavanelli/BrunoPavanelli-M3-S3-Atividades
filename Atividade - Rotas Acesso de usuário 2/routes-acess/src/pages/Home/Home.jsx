import React from "react";
import { Link } from "react-router-dom";
import { HomeStyled } from "./HomeStyled";

const Home = ({ members }) => {
  return (
    <HomeStyled>
      {members.map((member) => (
        <Link to={member.type === "pj" ? `/company/${member.id}` : `/customer/${member.id}`}>
            Enter: {member.name}
        </Link>
      ))}
    </HomeStyled>
  );
};

export default Home;
