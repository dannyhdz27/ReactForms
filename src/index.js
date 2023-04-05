import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const username = event.target.username.value;
    console.log(username);
    setUsername("");
    console.log(password);
    setPassword("");
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div id="container">
      <div id="navbar">Form.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username:">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<Form />, document.getElementById("app"));
