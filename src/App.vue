<template>
  <div id="app">
    <SlotTable />
  </div>
</template>

<script>
import SlotTable from './components/SlotTable/test.vue'

export default {
  name: 'App',
  components: {
    SlotTable
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
