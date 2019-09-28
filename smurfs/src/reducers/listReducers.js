import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE } from "../actions";

const initialState = {
  data: [],
  isGetting: false,
  error: ""
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        isGetting: true
      };
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isGetting: false,
        error: ""
      };
    case GET_SMURFS_FAILURE:
      return {
        ...state,
        isGetting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default listReducer;
