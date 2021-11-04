import { getRandomID } from "../../models/function";
import { ACTIONS, UnionedChatAction } from "../actions";
import { getCurrentTime } from "../../models/function";

const initialState: { lists: ChatList[] } = {
  lists: [
    {
      id: getRandomID(),
      user: "host",
      message: "Welcome!",
      time: getCurrentTime(),
    },
  ],
};

export const ChatReducer = (
  state: { lists: ChatList[] } = initialState,
  action: UnionedChatAction
) => {
  switch (action.type) {
    case ACTIONS.ADD_CHAT:
      return {
        lists: [...state.lists, action.payload.list],
      };

    case ACTIONS.DELETE_CHAT:
      return {
        lists: state.lists.filter((list) => list.id !== action.payload.id),
      };
    default:
      return state;
  }
};
