import axios from 'axios';
let path = `${process.env.VUE_APP_APIURL}/api/items`;
export const getProducts = () => {
  return axios.get(path).then(e=>e.data);
}
export const getProduct = (id) => {
  return axios.get(path+'/'+id).then(e=>e.data);
}
