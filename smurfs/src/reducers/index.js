import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, POST_SMURFS, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE } from "../actions";

const initialState = {
  data: [],
  isGetting: true,
  isPosting: false,
  error: ""
};

const smurfReducer = (state = initialState, action) => {
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
    case POST_SMURFS:
      return {
        ...state,
        isPosting: true
      };
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isPosting: false,
        error: ""
      };
    case POST_SMURFS_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default smurfReducer;
