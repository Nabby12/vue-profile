<template>
  <div class="top">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      title: 'This is top page!'
    }
  }
}
</script>

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
