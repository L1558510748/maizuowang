<template>
  <div v-html="info">

  </div>
</template>

<script>
import {getInfo} from "@/api"
export default {
  data(){
    return{
      info:''
    }
  },
    created(){
      getInfo().then((res)=>{
        this.info=res.data.data.content;
        console.log(this.info)
      })
    }
}
</script>

<style>

</style>