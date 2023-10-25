export const getPostsByAuthor = async (authorSlug: string = '') => {
  const clearSlug = authorSlug
    ? `[author][slug]=${authorSlug.replace(/[^a-z0-9-_]/gi, '')}`
    : '';
  const url = `http://localhost:1337/api/posts?filters${clearSlug}&populate=deep`;

  const data = await fetch(url);
  const json = await data.json();

  return json.data;
};
