<template>
  <div id="app">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name:'app',
  data(){
    return {
      msg:"Hello World !"
    }
  },
}
</script>

<style >
  #app {
    font-size: 50px
  }
</style>