import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'portfolio-yama-blog',
  apiKey: process.env.API_KEY,
});