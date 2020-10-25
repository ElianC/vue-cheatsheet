<template>
<div class="grid justify-items-stretch">

<table class="">
  <thead>
    <tr>
      <th>Nom</th>
      <th>Age</th>
      <th>Adresse mail</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users">
      <td :key='user.id'>{{user.name}}</td>
      <td >{{user.age}}</td>
      <td >{{user.email}}</td>
      <td><router-link :to='`/admin/users/${user.id}`'>view <i class="material-icons">chevron_right</i></router-link></td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
import { ref, reactive, computed } from 'vue';
import { getUsers } from '@/services/api/users';
  export default {
    setup() {
      let users = ref([]);
      getUsers().then(res => users.value = res.data)
      return {
        users
      }
    }
  }
</script>
<style scoped lang="scss">
 @import '../../../../src/assets/styles/table';

</style>
