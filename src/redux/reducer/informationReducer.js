import * as actionTypes from "@/redux/action/action-types";
import { $localSave } from "@/utils";
const informationReducer = (
  initial = {
    userInfo: null,
    token: $localSave.gain("authorization"),
  },
  { type, payload }
) => {
  const deepReource = JSON.parse(JSON.stringify(initial));
  switch (type) {
    case actionTypes.INITIAL_USER_INFORMATION:
      deepReource.userInfo = payload;
      break;
    case actionTypes.SAVE_TOKEN:
      deepReource.token = payload;
    default:
      break;
  }
  return deepReource;
};

export default informationReducer;