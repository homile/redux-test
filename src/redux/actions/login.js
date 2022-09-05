export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_INFO =  "LOGIN_INFO";

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

export const loginInfo = (res) => ({
  type: LOGIN_INFO,
  payload: res
})