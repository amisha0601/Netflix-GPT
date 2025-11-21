import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true,
}); 

export default client;