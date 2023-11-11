import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      hamburgeron:false,
      follows:false
    }
  },
  mutations: {
    
  
  }
})

export default store;

