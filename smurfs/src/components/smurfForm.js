import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions";

const SmurfForm = ({ postSmurfs }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    postSmurfs({
      name,
      age,
      height
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} placeholder="Name" />
        <input type="number" name="age" value={age} onChange={event => setAge(event.target.value)} placeholder="Age" />
        <input type="number" name="height" value={height} onChange={event => setHeight(event.target.value)} placeholder="Height" />
        <button>Add to Smurfville</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  { postSmurfs }
)(SmurfForm);
