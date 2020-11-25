import axios from 'axios';
const url = 'http://localhost:9090';


axios.interceptors.request.use(config => {
  return config;
});

axios.interceptors.response.use(response => {
  if (response.status !== 200) {
    console.error(response);
  }
  let responseData = response.data;
  if (responseData.code === 0) {
    return responseData.data;
  }
  if (responseData.code === 99) {
    return Promise.reject({message: responseData.message});
  }
  return response.data;
});

function loginCheck(userId, password) {
  return axios.post(url + '/login/check', {userId, password});
}

export default {
  loginCheck
}
