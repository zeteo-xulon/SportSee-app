import axios from 'axios';

const BASE_URL = 'http://localhost:3000/user';

const apiService = {
  getUser: (userId) => axios.get(BASE_URL+ "/" + userId),
  getUserActivity: (userId) => axios.get(BASE_URL+ "/" + userId + "/activity"),
  getUserAverageSessions: (userId) => axios.get(BASE_URL+ "/" + userId + "/average-sessions"),
  getUserPerformance: (userId) => axios.get(BASE_URL+ "/" + userId + "/performance"),
};

export default apiService;