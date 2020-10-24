import axios from 'axios';
let path = `${process.env.VUE_APP_APIURL}/users`;
export const getUsers = () => {
  return axios.get(path).then(e=>e);
}
export const getUser = (id) => {
  return axios.get(path+'/'+id).then(e=>e);
}
