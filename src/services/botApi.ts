import axios from 'axios';

const botApi = axios.create({
  baseURL: process.env.API_RADARBOT_URL,
  headers: {
    "authorization": `Bearer ${process.env.API_TOKEN}`
  }
});

export default botApi;