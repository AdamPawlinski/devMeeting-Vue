<template>
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
  name: "AddFruit"
  data() {
        return {
          newFruit: {
            name: ''
          }
        }
      },
  methods: {
    onRemove(){
      removeItem(index){
      this.$emit(index, 1)
      }
    }
    onSubmit(){
      this.$validator.validateAll().then(result => {
      if (!result) {
        return;
      }
      this.$emit('onAddFruit', {
        id: uuid(),
        ...this.newFruit
      });
      this.newFruit.name = '';
      this.$validator.reset();
      });
    }
  }
</script>
<style>

</style>
