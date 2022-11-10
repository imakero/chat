export type User = {
  id: number;
  username: string;
  email: string;
};

export type Message = {
  id: number;
  text: string;
  postedAt: string;
  user: User;
};
