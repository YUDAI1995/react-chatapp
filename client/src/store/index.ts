import { createStore } from "redux";
import { combineReducers } from "redux";
import { ChatReducer } from "./reducer/ChatReducer";
import { LoginReducer } from "./reducer/LoginReducer";
import { UserReducer } from "./reducer/UserReducer";

const rootReducer = combineReducers({
  ChatReducer,
  LoginReducer,
  UserReducer,
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// reduxを型安全に操作するための記述
export type RootState = ReturnType<typeof store.getState>;
// export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
// export type AppDispatch = typeof store.dispatch;
