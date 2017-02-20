<template>
  <div>
    <p>共{{ items.length }}个</p>
    <ol class="list">
      <li class="item" v-for="item, index in items">{{ item.text }} <button @click="del(index)">删除</button></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['items', 'del']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.red {
  color: red;
}

</style>
