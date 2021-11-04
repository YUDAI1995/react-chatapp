import { Action } from "redux";

export enum ACTIONS {
  ADD_CHAT = "ADD_CHAT",
  DELETE_CHAT = "DELETE_CHAT",
  LOGIN = "LOGIN",
  JOIN_ROOM = "JOIN_ROOM",
}

export interface AddChatAction extends Action {
  type: ACTIONS.ADD_CHAT;
  payload: {
    list: ChatList;
  };
}

export interface DeleteChatAction extends Action {
  type: ACTIONS.DELETE_CHAT;
  payload: {
    id: string;
  };
}

export interface Login extends Action {
  type: ACTIONS.LOGIN;
  payload: {
    isLogin: boolean;
    user: UserList | "Gest User";
  };
}

export interface JOIN_ROOM extends Action {
  type: ACTIONS.JOIN_ROOM;
  payload: {
    data: User;
  };
}

// Chat追加
const addChat = (list: ChatList): AddChatAction => {
  return {
    type: ACTIONS.ADD_CHAT as ACTIONS.ADD_CHAT,
    payload: { list: list },
  };
};

// Chat削除
const deleteChat = (id: string) => {
  return {
    type: ACTIONS.DELETE_CHAT as ACTIONS.DELETE_CHAT,
    payload: { id: id },
  };
};

// ログイン
const login = (islogin: boolean, user: UserList) => {
  return {
    type: ACTIONS.LOGIN as ACTIONS.LOGIN,
    payload: { islogin: islogin, user: user },
  };
};

const joinRoom = (user: User) => {
  return {
    type: ACTIONS.JOIN_ROOM as ACTIONS.JOIN_ROOM,
    payload: {data: user},
  };
};

export type UnionedChatAction =
  | ReturnType<typeof addChat>
  | ReturnType<typeof deleteChat>;

export type UnionedLoginAction = ReturnType<typeof login>;

export type UnionedUserAction = ReturnType<typeof joinRoom>;
