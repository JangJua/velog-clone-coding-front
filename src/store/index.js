import { combineReducers } from "redux";

// reducers
import common from "store/reducers/commonReducer";
import postReducer from "store/reducers/postReducer";
import postDetailReducer from "store/reducers/postDetailReducer";
import userReducer from "store/reducers/userReducer";
import register from "store/reducers/registerReducer";
import modal from "store/reducers/modalReducer";
import readingList from "store/reducers/readingListReducer";

export default combineReducers({
  common,
  postReducer,
  postDetailReducer,
  userReducer,
  register,
  modal,
  readingList
});
