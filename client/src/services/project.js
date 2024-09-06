export const getProjectById = async (id) => {
    const response = await fetch(`http://localhost:1337/api/projects/${id}/?populate=*`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();
    return result;
};
