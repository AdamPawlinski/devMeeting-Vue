<template>
  <h1>Fruit list</h1>
  <ul>
    <li v-for="item in list">
      {{item.message}}
    </li>
  </ul>
  <p v-if="!list.length"> No Fruits on the list</p>
  <form @submit.prevent="onSubmit()">
    <input
      name="fruit"
      v-model="newFruit.name"
      v-validate="'required|min:3'"
      >
      <button>Add fruit</button>
      <div v-show="errors.has('fruit')">
        {{ errors.first('fruit') }}
      </div>
  </form>
</template>
<script>
  import uuid from 'uuid/v4';
  export default {
    name: 'app'
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
        newFruit: {
          name: ''
        }
      ]
    }
    methods: {
      onSubmit(){
        this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.list.push({
          id: uuid(),
          ...this.newFruit
        });
        this.newFruit.name = '';
        this.$validator.reset();
      });
      }
    }
  }

</script>
<style>
  #app {

  }
</style>
