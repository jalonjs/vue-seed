<template>
  <div id="app">
    <img :src="logo" class="logo">
    <Action btnText="添加" :addHandle="addHandle"></Action>
    <div class="list-wrapper">
      <div class="loading" v-if="loading">
        Loading...
      </div>
      <List :items="items" :del="del" v-else="!loading"></List>
    </div>
    <p class="footer">
      <router-link to="/foo/888">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Action from './components/Action'
  import List from './components/List'
  import API from './api'
  import logo from './assets/logo.png'

  export default {
    name: 'app',
    data() {
      return {
        loading: true,
        logo: logo
      }
    },
    created() {
      // try {
      //   (async () => {
      //     const response = await API.getTaskList(this)
      //     this.$store.state.items = response.body
      //     this.loading = false
      //   })()
      // } catch (e) {
      //   console.log(e)
      // }'

      API.getTaskList(this).then(response => {
        this.$store.state.items = response.body
        this.loading = false

      }, response => {
        // error callback
      })

    },
    computed: {
      items() {
        return this.$store.state.items
      }
    },
    methods: {
      addHandle(text) {
        console.log(text)
        this.$store.commit('add', text)
      },
      del(index) {
        this.$store.dispatch('delAsync', index)
      }
    },
    components: { Action, List }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .list-wrapper {
    width: 8rem;
    min-height: 2rem;
    position: relative;
    margin: 1rem auto;
    font-size: 0.5rem;
    background: #eeeeee;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .loading {
    font-size: 0.5rem;
    color: #333;
    margin-top: 0.6rem;
  }
  
  .logo {
    width: 2rem;
  }
  
  .footer {
    font-size: 0.6rem;
  }
</style>