<template>
  <div>
    <button @click="btn">btn</button>
  </div>
</template>

<script>
import {$axioss} from '../request/axios'

export default {
  name:'home',
  setup(){
    async function btn(){
      let axiosse = await $axioss()
      console.log(axiosse)
    }
  return {
    btn
  }
  }
}
</script>

<style>

</style>