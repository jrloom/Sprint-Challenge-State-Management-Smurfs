import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const SmurfList = ({ smurfs, getSmurfs, isGetting, error }) => {
  useEffect(() => {
    getSmurfs();
  }, [getSmurfs]);

  if (isGetting) {
    return <h2>Finding Smurfs</h2>;
  } else if (error) {
    return <h2>Gargamel wins</h2>;
  } else {
    return (
      <div>
        <h2>Smurfs</h2>
        {smurfs.map(smurf => (
          <div key={smurf.id}>
            {smurf.name} is {smurf.age} years old, and {smurf.height} tall
          </div>
        ))}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  smurfs: state.data,
  isGetting: state.isGetting,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
