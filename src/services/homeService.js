import { Axios } from "./Axios";

export function getHome() {
  return Axios.get();
}

export function postHome(payload) {
  console.log(" gia tri truyen toi day cua payload la" + payload);
  return Axios.post("", payload);
}

export const homeService = {
  getHome,
  postHome,
};
