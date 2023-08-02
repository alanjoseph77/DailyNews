import axios from "axios";

const apiKey = 'OIvENlx9ZPc5XM9jL_2_pAvGtWILGJQejVTsfQW4dHc';
const apiBaseUrl = 'https://api.newscatcherapi.com/v2';
const breakingNewsEndpoint = `${apiBaseUrl}?apikey=${apiKey}`;



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
