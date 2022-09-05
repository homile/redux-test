import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginInfo, loginSuccess } from "./redux/actions/login";

const App = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const nameChange = (el) => {
    setName(el)
  };
  console.log(useSelector((state) => state.loginReducer))

  const loginBtnClick = () => {
    dispatch(loginSuccess())
    dispatch(loginInfo(name))
  };

  return (
    <div className="container">
      <div>
        <label htmlFor="name">이름</label>
        <input id="name" onChange={(el) => nameChange(el.target.value)}></input>
      </div>
      <div>
        <button type="button" onClick={loginBtnClick}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default App;
