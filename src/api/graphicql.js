import { apiinstance } from "./interceptor";

export const fetchGraphQl = async (GET_POSTS_QUERY, varia) => {
  const entries = await apiinstance("", {
    method: "POST",
    body: JSON.stringify({
      query: GET_POSTS_QUERY,
      variables: varia,
    }),
  });
  if (entries?.data) {
    return entries?.data;
  } else {
    if (entries) {
      return entries;
    }
  }
};
