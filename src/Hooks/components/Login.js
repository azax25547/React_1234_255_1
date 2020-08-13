import React from "react";

export default function Login(props) {
  const [user, setUser] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUser(user);
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setUser(event.target.value)}
          placeholder="Input Username"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
