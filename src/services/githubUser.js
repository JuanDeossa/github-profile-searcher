import { baseUserURL } from "../constants";

export const getUserFromAPI = async ({
  userQuery = "octocat",
  baseURL = baseUserURL,
}) => {
  const url = `${baseURL}${userQuery}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
