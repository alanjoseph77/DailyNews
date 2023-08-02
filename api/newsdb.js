import axios from "axios";

// const apiKey = '5dbfd402b98e4d05b00ee27dc1f6ebb8';
const apiKey = '5f0b92303547434a9b18107542818950';

const apiBaseUrl = 'https://newsapi.org/v2';
const breakingNewsEndpoint = `${apiBaseUrl}/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
const allNewsEndpoint = `${apiBaseUrl}/everything?sources=bbc-news&apiKey=${apiKey}`;
  const apiCall = async (endpoints, params) => {
    const options = {
      method: 'GET',
      url: endpoints,
      params: params ? params : {}
    };
    try {
      // Add a delay before making the API request
      await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay time as needed
  
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.log('error: ', error);
      return {};
    }
  }

  export const fetchBreakingNews = () => {
    return apiCall(breakingNewsEndpoint);
  }
  export const fetchallNews = () => {
    return apiCall(allNewsEndpoint);
  }
