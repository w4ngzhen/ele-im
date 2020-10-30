const axios = require('axios');
const url = 'http://localhost:9090';


// axios.interceptors.request.use(config => {
//
// });
//
axios.interceptors.response.use(response => {
  if (response.status !== 200) {
    console.error(response);
  }
  return response.data;
});

function loginCheck(username, password) {
  return axios.post(url + '/login/check', {username, password});
}

module.exports = {
  loginCheck
};
