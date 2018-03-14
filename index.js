import axios from 'axios';
const store = {
  state: {
    list: []
  },
  async fetchList(){
    this.state.list = await axios.get('fruits.json').then(res => res.data);
  },
  addFruit(fruit){
    this.state.list.push(fruit)
  }
};
export default store;
