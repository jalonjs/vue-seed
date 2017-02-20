<template>
  <div class="input-box">
    <input type="text" v-focus v-model.trim="text" placeholder="输入item" @keyup="keyup" v-focus/>
    <button @click="add" style="margin-left: 10px;">{{ btnText }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Action',
    props: ['btnText', 'addHandle'],
    data() {
      return {
        text: ''
      }
    },
    methods: {
      keyup(e) {
        if (e.keyCode === 13) {
          this.add()
        }
      },
      add() {
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
  .input-box {
    width: 100%;
  }
  input {
    border: 1px solid #ccc;
    width: 4rem;
    padding: 0.2rem;
    border-radius: 4px;
  }
  button {
    background: #fff;
    padding: 0.2rem 0.6rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>