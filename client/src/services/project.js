export const getProjectById = async (id) => {
  const response = await fetch("/strapi-data.json");
  const json = await response.json();
  const data = json.data;
  const result = data.find((project) => project.id === id);
  return result;
};
