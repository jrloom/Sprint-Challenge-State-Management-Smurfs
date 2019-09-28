export const GET_SMURFS = "FETCH_SMURFS";
export const GET_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const GET_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const POST_SMURFS = "POST_SMURFS";
export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333")
    .then(resolve => {
      console.log("good things --> ", resolve);
      dispatch({ type: GET_SMURFS_SUCCESS, payload: resolve });
    })
    .catch(error => {
      console.log("bad things --> ", error);
      dispatch({ type: GET_SMURFS_FAILURE });
    });
};

export const postSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333")
    .then(resolve => {
      console.log("good things --> ", resolve);
      dispatch({ type: POST_SMURFS_SUCCESS, payload: resolve });
    })
    .catch(error => {
      console.log("bad things --> ", error);
      dispatch({ type: POST_SMURFS_FAILURE });
    });
};
