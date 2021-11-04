import { ACTIONS, UnionedUserAction } from "../actions";

const initialState: { data: User } = {
  data: { id: 0, user: "Gest User", room: false },
};

export const UserReducer = (
  state: { data: User } = initialState,
  action: UnionedUserAction
) => {
  switch (action.type) {
    case ACTIONS.JOIN_ROOM:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
};
