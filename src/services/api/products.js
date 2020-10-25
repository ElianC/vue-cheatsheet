import axios from 'axios';
let path = `${process.env.VUE_APP_APIURL}/items`;
export const getProducts = () => {
  return axios.get(path).then(e=>e);
}
export const getProduct = (id) => {
  return axios.get(path+'/'+id).then(e=>e);
}
