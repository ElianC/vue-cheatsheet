<template>
<div class="grid justify-items-stretch">
  <table>
    <thead>
      <tr>
        <th>Designation</th>
        <th>Nom</th>
        <th></th>
      </tr>
    </thead>
    <tr v-for="product in products">
      <td>{{product.pantone_value}}</td>
      <td>{{product.name}}</td>
      <td><router-link :to='`/admin/products/${product.id}`'>view<i class="material-icons">chevron_right</i></router-link></td>
    </tr>
  </table>
</div>
</template>
<script>
import { getProducts } from '@/services/api/products';
import { ref } from 'vue';
export default {
  setup() {
    let products = ref([]);
    getProducts().then(res => products.value = res.data);
    return {
      products
    }
  }
}
</script>
<style scoped lang="scss">
 @import '../../../../src/assets/styles/table';

</style>
