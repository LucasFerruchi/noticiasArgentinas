// 4e7d5e92b82d40bba34c6a389416f409
//https://newsapi.org/v2/top-headlines?country=ar&apiKey=4e7d5e92b82d40bba34c6a389416f409
const url =
  "https://newsapi.org/v2/top-headlines?country=ar&apiKey=4e7d5e92b82d40bba34c6a389416f409";

//async await

export const getNewsArg = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};
