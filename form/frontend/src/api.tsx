import { SignUpFields } from "./types";

export const BASE_URL = "http://127.0.0.1:5000";

export const login = (body: SignUpFields) => {
  return fetch(`${BASE_URL}/api/users`, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(body),
  }).then((response) => {
    return response.json();
  });
};
