import { env } from "node:process";

const parseEnv = () => {
  const arrayValues = Object.entries(env);
  const rssValues = arrayValues
    .filter((item) => item.at(0).startsWith("RSS_"))
    .map((item) => item.join("="))
    .join("; ");

  console.log(rssValues);
};

parseEnv();
