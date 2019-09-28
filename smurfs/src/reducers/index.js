import { combineReducers } from "redux";
import formReducers from "./formReducers";
import listReducers from "./listReducers";

export default combineReducers({
  formReducers,
  listReducers
});
