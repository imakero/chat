export const parseJwt = (token: string) =>
  JSON.parse(Buffer.from(token, "base64").toString().split("}")[1] + "}");
