import React from "react";
import { UserContext } from "../App";

export default function Header(props) {
  const user = React.useContext(UserContext);
  return (
    <>
      <p>Welcome {user}!</p>
      <button onClick={() => props.setUser("")}>Logout</button>
    </>
  );
}
