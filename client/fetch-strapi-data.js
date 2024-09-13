import fetch from 'node-fetch';
import fs from 'fs';
import { config } from 'dotenv';

config(); // Load environment variables

console.log('Strapi URL:', process.env.VITE_STRAPI_URL); // Log the URL for debugging

const fetchStrapiData = async () => {
    try {
        const res = await fetch(`${process.env.VITE_STRAPI_URL}/api/projects/?populate=*`);
        const data = await res.json();

        // Save the data as a JSON file
        fs.writeFileSync('./public/strapi-data.json', JSON.stringify(data, null, 2));
        console.log('Strapi data fetched and saved as JSON.');
    } catch (err) {
        console.error('Error fetching Strapi data:', err);
    }
};

fetchStrapiData();
