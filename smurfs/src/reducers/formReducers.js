import { POST_SMURFS, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE } from "../actions";

const initialState = {
  data: [],
  isPosting: false,
  error: ""
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default formReducer;
