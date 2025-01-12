import axios from "axios";

export const GET_SMURFS = "FETCH_SMURFS";
export const GET_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const POST_SMURFS = "POST_SMURFS";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(resolve => dispatch({ type: GET_SMURFS_SUCCESS, payload: resolve.data }))
    .catch(error => dispatch({ type: GET_SMURFS_FAILURE, payload: `${error.response.status} ${error.response.statusText}` }));
};

export const postSmurfs = smurf => dispatch => {
  dispatch({ type: POST_SMURFS });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(resolve => dispatch({ type: POST_SMURFS_SUCCESS, payload: resolve.data }))
    .catch(error => dispatch({ type: POST_SMURFS_FAILURE, payload: `${error.response.status} ${error.response.statusText}` }));
};
