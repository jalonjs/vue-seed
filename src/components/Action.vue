<template>
  <div class="input">
    <input type="text" v-model.trim="text" placeholder="输入item" @keyup="keyup" v-focus/>
    <button @click="add" style="margin-left: 10px;">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: ['btnText', 'addHandle'],
  data () {
    return {
      text: ''
    }
  },
  methods: {
    keyup (e) {
      if (e.keyCode === 13) {
        this.add()
      }
    },
    add () {
      console.log(this.count)
      if (this.text === '') {
        return
      }
      this.addHandle(this.text)
      this.text = ''
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


</style>
