<template>
  <ul>
    <li v-for="item in list">
      {{item.message}}
      <div @click="removeItem(index)">x</div>
    </li>
  </ul>
  <p v-if="!list.length">No Fruits on the list</p>
</template>
<script>
export default {
  name: "FruitList",
  props: {
    list: {
      type: Array,
    }
  }
}
</script>
<style>
</style>
