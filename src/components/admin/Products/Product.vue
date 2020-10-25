<template>
<router-link to="/admin/products"><i class="iconBack material-icons">arrow_circle_down</i></router-link>
<img :src="product.photo_url" :alt="product.name">
</template>
<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getProduct } from '@/services/api/products';
  export default {
    setup() {
      let route = useRoute();
      let product = ref({});
      getProduct(route.params.id).then(res => product.value = res.data[0]);
      return {
        product
      }
    }
  }
</script>
