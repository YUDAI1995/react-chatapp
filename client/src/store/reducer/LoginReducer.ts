import { ACTIONS, UnionedLoginAction } from "../actions";

const initialState: { isLogin: boolean; user: UserList | "Gest User" } = {
  isLogin: false,
  user: "Gest User",
};

export const LoginReducer = (
  state: { isLogin: boolean; user: UserList | "Gest User" } = initialState,
  action: UnionedLoginAction
) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      console.log(action);
      return;
    default:
      return state;
  }
};
