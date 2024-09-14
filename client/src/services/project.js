export const getProjectById = async (id) => {
    let result;
    const response = await fetch('/strapi-data.json');
    const json = await response.json();
    const data = json.data
    result = data.find(project => project.id === id);
    return result;
};




