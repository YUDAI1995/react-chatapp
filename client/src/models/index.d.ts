interface ChatList {
  id: string;
  user: string;
  message: string;
  time: string;
}

interface UserList {
  id: string;
  name: string;
  //isLogin: Boolean;
}

interface User {
  id: number;
  user: string;
  room: string | false;
}
