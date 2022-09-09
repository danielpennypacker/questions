/*
I like to put ajax requests in their own file. 
 */
import { SignUpFields } from "./types";

export const BASE_URL = "http://127.0.0.1:5000";

// Reusable for this module.
const rejectErrorStatus = (resp: any) => {
  let json = resp.json();
  if (resp.status >= 200 && resp.status < 300) {
    return json;
  } else {
    return json.then(Promise.reject.bind(Promise));
  }
};

export const login = (body: SignUpFields) => {
  return fetch(`${BASE_URL}/api/users`, {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(body),
  }).then(rejectErrorStatus);
};
