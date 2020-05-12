import Vue from 'vue'

Vue.filter("formatDate",(v)=>{
    return  new Date(v*1000).toLocaleString().split(" ")[0]+"上映";
})
