import Vue from 'vue'
import Vuex from 'vuex'

// 开启
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    add(state, text) {
      state.items.unshift({
        text: text
      })
    },
    del(state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
    delAsync(state, index) {
      setTimeout(function () {
        state.commit('del', index)
      }, 2000)
    }
  },
  computed: {
    count() {
      return this.items.length
    }
  }
})

export default store