import axios from 'axios';
export const login = async (user) => {
try {
  let res = await axios.post(`${process.env.VUE_APP_APIURL}/api/login`, user).then(res => res['data']);
    localStorage.setItem('mean-token', res['token']);
    return true;
} catch (error) {
  return;
}
}

export const isLoggedIn = () => {
  return localStorage.getItem('mean-token')!== null ? true: false;
}
