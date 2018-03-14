<template>
  <div id="app">
    <h1>Fruit list</h1>
    <fruit-list :list="sharedState.list" @onRemove="handleRemove"></fruit-list>
    <add-fruit @onAddFruit="handleAddFruit"></add-fruit>
  </div>
</template>
<script>
  import FruitList from 'fruitList';
  import AddFruit from 'addFruit';
  import store from index.js;  
  export default {
    name: 'app',
    components: {
      FruitList,
      AddFruit
    },
    created(){
      store.fetchFruit();
    }
    data(){
      return: {
        sheredState: store.state
      }
    }
      methods: {
        handleRemove(index){
          this.list.splice(index, 1)
        }
        handleAddFruit(fruit){
          storeAddFruit(fruit);
        }
      }
    }
</script>
<style>
  #app template{
    margin: 50px auto;
    font-size: 20px;
    font-family: Helvetica sans-serif;
  }
</style>
