import { Message } from "../lib/types";

export const messageStub = (): Message => ({
  id: 42,
  postedAt: "2022-11-11T12:47:09.000Z",
  text: "testing message",
  user: {
    id: 2,
    email: "testo@testo.com",
    username: "testo",
  },
});
