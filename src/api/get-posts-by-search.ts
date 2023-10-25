export const getPostsBySearch = async (q: string) => {
  const url = `http://localhost:1337/api/posts?filters[title][$containsi]=${q}%&populate=*`;

  const data = await fetch(url);
  const json = await data.json();

  return json.data;
};
