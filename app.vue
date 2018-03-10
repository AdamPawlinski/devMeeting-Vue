<template>
  <h1>Fruit list</h1>
  <fruit-list :list="list" @onRemove="handleRemove"></fruit-list>
  <add-fruit @onAddFruit="handleAddFruit"></add-fruit>
</template>
<script>
export default {
  import FruitList from 'FruitList';
  import AddList from 'AddFruit';
  name: 'app'
  components: {
    FruitList,
    AddList
  },
  data(){
    list: [{
        id: 0,
        name: 'orange'
      }
      {
        id: 1,
        name: 'kiwi'
      }
      {
        id: 2,
        name: 'banana'
      }
    ]
  }
    methods: {
      handleRemove(index){
        this.list.splice(index, 1)
      }
      handleAddFruit(fruit){
        this.list.push(fruit);
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
