import axios from 'axios';
import { USER_INFOS } from '../Mock/MockedUser';
import { USER_ACTIVITY } from '../Mock/MockedUserActivity';
import { USER_AVERAGE_SESSIONS } from '../Mock/MockedUserAverageSessions';
import { USER_PERFORMANCE } from '../Mock/MockedUserPerformance';


const BASE_URL = 'http://localhost:3000/user';
const mockedUserData = [ USER_INFOS, USER_ACTIVITY , USER_AVERAGE_SESSIONS, USER_PERFORMANCE];

const getUSER = async (userId) => {
  if(BASE_URL == null) { return mockedUserData[0] }
  return axios.get(BASE_URL+ "/" + userId)
}
const getUserACTIVITY = async (userId) => {
  if(BASE_URL == null) { return mockedUserData[1] }
  return axios.get(BASE_URL+ "/" + userId + "/activity")
}
const getUserSESSIONS = async (userId) => {
  if(BASE_URL == null ) { return mockedUserData[2] }
  return axios.get(BASE_URL+ "/" + userId + "/average-sessions")
}
const getUserPERFORMANCE = async (userId) => {
  if(BASE_URL == null ) { return mockedUserData[3] }
  return axios.get(BASE_URL+ "/" + userId + "/performance")
}

const apiService = {
  getUser: (userId) => getUSER(userId),
  getUserActivity: (userId) => getUserACTIVITY(userId),
  getUserAverageSessions: (userId) => getUserSESSIONS(userId),
  getUserPerformance: (userId) => getUserPERFORMANCE(userId),
};

export default apiService;