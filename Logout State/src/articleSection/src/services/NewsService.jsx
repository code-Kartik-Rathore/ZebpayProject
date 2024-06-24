
import axios from 'axios';

const API_KEY = '7294eff81925415cb397fb4817e21643';
const BASE_URL = 'https://newsapi.org/v2/everything';

export const getCryptoNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: '(cryptocurrency OR crypto OR blockchain OR bitcoin OR ethereum) AND (investment OR trading OR market)',
        from: '2024-05-24',
        sortBy: 'publishedAt',
        language: 'en',
        domains: 'wsj.com,forbes.com,bloomberg.com,coindesk.com,cointelegraph.com',
        pageSize: 9,
        apiKey: API_KEY
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching cryptocurrency news:', error);
    return [];
  }
};
