import axios from 'axios';
let path = `${process.env.VUE_APP_APIURL}/api/users`;
/**
 * API Structure:
{
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
  ]
}
 */
export const getUsers = () => {
  return axios.get(path).then(e=>e.data);
}
export const getUser = (id) => {
  return axios.get(`${path}/${id}`).then(e=>e.data);
}
