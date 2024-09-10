export const getProjectById = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/projects/${id}/?populate=*`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();
    return result;
};
