<template>
  <h1>Fruit list</h1>
  <ul>
    <li v-for="item in list">
      {{item.message}}
    </li>
  </ul>
  <p v-if="!list.length"> No Fruits on the list</p>
</template>
<script>

</script>
<style>
  #app {

  }
</style>
