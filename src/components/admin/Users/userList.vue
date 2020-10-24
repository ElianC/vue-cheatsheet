<template>
<div class="grid justify-items-stretch">

<table class="table-auto w-3/4 justify-self-center">
  <thead>
    <tr>
      <th>Nom</th>
      <th>Age</th>
      <th>Adresse mail</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users">
      <td :key='user.id'>{{user.name}}</td>
      <td >{{user.age}}</td>
      <td >{{user.email}}</td>
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
<style lang="scss">
td {
  @apply border px-4 py-3;
}
tbody tr {
  &:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
}
</style>
