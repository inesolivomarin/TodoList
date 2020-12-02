import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="header">
        <FontAwesomeIcon className="icon" icon={["far", "list-alt"]} />
        <h1>Todo List</h1>
      </div>
    </>
  );
};

export default Header;
