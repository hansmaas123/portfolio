export const getProjectById = async (id) => {
    // const response = await fetch(`${import.meta.env.VITE_STRAPI_URL}/api/projects/${id}/?populate=*`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
    // const result = await response.json();
    // console.log(result)
    // return result;


    let result;

        const response = await fetch('/strapi-data.json');
        const json = await response.json();
        const data = json.data
        result = data.find(project => project.id === id);
    console.log('Production JSON:', result);
return result;
};




