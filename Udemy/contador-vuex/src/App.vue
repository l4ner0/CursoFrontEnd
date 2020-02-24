<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{ $store.state.counter }}</p>
    <Counter></counter>
  </div>
</template>

<script>
import Counter from '@/components/Counter'
export default {
  name: 'App',
  components: {
    Counter
  },
  data(){
    return {
      message: "hola"
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
