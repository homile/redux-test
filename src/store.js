// 취소선: redux toolkit 사용하란 의미
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer);

export default store;
