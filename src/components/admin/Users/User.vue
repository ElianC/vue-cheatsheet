<template>
  <router-link to='/admin/users'><i class="iconBack material-icons">arrow_circle_down</i></router-link>
  <p>{{user.first_name}}</p>
</template>
<script>
import { getUser } from '@/services/api/users';
import { useRoute } from 'vue-router'
import { ref } from 'vue';
  export default {
    setup() {
      let route = useRoute();
      let user = ref({});
      getUser(route.params.id).then(res => user.value = res.data);
      return {
        user,
      }

    }
  }
</script>
