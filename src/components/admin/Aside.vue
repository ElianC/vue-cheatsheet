<template>
<ul>
  <li><router-link to="/admin/home">Home</router-link></li>
  <li><router-link to="/admin/users">Utilisateurs</router-link></li>
  <li><router-link to="/admin/products">Produits</router-link></li>
</ul>
</template>
<script>

</script>
<style scoped lang="scss">
ul {
  background-color: blue;
 li {
    height: 30px;
  }
  a{
    border-left: 3px solid transparent;

    &.router-link-active {
        color: #42b983;
        border-left: 3px solid;
      }
  }

}
</style>
