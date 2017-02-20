<template>
  <div class="list-box">
    <p>共{{ items.length }}个</p>
    <ul class="list">
      <li class="item" v-for="item, index in items">{{ item.text }} <button class="delete-btn" @click="del(index)">删除</button></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ['items', 'del']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped rel="stylesheet/scss" lang="scss">
  ul {
    padding: 0.4rem;
    li {
      list-style-type: none;
      margin-bottom: 0.3rem;
      height: 1rem;
      .delete-btn {
        background: #fff;
        padding: 0.2rem 0.4rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
  }
</style>