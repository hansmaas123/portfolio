export const getProjectById = async (id) => {
  const response = await fetch(`${import.meta.env.BASE_URL}strapi-data.json`);
  const json = await response.json();
  const data = json.data;
  const result = data.find((project) => project.id === id);
  return result;
};
