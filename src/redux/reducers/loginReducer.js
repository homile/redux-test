import { LOGIN_SUCCESS, LOGIN_INFO } from "../actions/login";

const initialstate = {
  isLogin: false,
  userName: "",
};

const loginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        // 순서 중요
        ...state,
        isLogin: true,
      };
    case LOGIN_INFO:
      return {
        isLogin: true,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer