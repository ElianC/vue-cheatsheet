<template>
<section class="container flex">
  <aside>
    <Aside />
  </aside>
  <main>
    <router-view />
  </main>
</section>
</template>

<script>
import Aside from '@/components/admin/Aside.vue';
export default {
  components: {
    Aside,
  }
}
</script>
<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
}
main {
  width: 100%;
}
aside{
  width: 300px;
}
</style>
