<template>
<div class="grid justify-items-stretch">

<table class="">
  <thead>
    <tr>
      <th></th>
      <th>Nom</th>
      <th>Adresse mail</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key='user.id'>
      <td><img :src="user.avatar" :alt="'Photo de ' + user.first_name"></td>
      <td>{{user.first_name}} {{user.last_name}}</td>
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
      getUsers().then(res => users.value = res.data);

      return {
        users
      }
    }
  }
</script>
<style scoped lang="scss">
 @import '../../../../src/assets/styles/table';
td img {
  @apply rounded-full h-16 w-16 flex items-center justify-center;
}
</style>
