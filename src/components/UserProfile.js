import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const temp = useContext(UserContext);
//   console.log(temp);

  return (
    <div>
      <h1 id="name">Name:- {temp.obj.name}</h1>
      <h1 id="age">Age:- {temp.obj.age}</h1>
    </div>
  );
};

export { UserProfile };
