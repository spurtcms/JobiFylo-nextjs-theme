import { Login_token } from "./clientActions";

export const apiinstance = async (url, options) => {
  const Token_user = Login_token();

  const headers = {
    "Content-Type": "application/json",
    ApiKey: process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_DEFAULT_APIKEY,
  };

  headers["Authorization"] =
    process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_TOKEN;
  const accessToken = await Login_token();
  if (accessToken) {
    headers["Userkey"] = accessToken;
  }

  const config = {
    method: options.method || "GET",
    headers,
    ...options,
  };

  if (config.method == "GET") {
    delete config.body;
  } else {
    config.body = config.body;
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL}${url}`,
      config
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
