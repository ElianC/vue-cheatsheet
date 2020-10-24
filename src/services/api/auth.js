import axios from 'axios';
import {getUsers} from '@/services/api/users';
export const login = async (user) => {
  //! Fake login
  let users = await getUsers();
  let userDB = users.data.find(el => el.email === user.mail.value);
  if (userDB && userDB.password === user.password.value) {
    let {id, username} = userDB;
    localStorage.setItem('mean-token', JSON.stringify({id, username}));
    return  userDB;
  }
};
export const isLoggedIn = () => {
  return localStorage.getItem('mean-token')!== null ? true: false;
}
