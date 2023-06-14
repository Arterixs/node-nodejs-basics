import { argv } from "node:process";

const parseArgs = () => {
  const arrArgv = argv.slice(2);
  const result = arrArgv
    .reduce((acc, item, indx, arr) => {
      if (!item.startsWith("--")) return acc;
      const arrSm = [];
      const newItem = item.slice(2);
      arrSm.push(newItem, arr[indx + 1]);
      acc.push(arrSm);
      return acc;
    }, [])
    .map((item) => item.join(" is "))
    .join(", ");
  console.log(result);
};

parseArgs();
