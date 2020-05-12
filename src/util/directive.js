import Vue from 'vue'
//做了自定义的指令，指令的名字叫 gd  v-gd
Vue.directive("gd",(el,binding)=>{  //bind ,update
    // console.log(el,binding)
     window.addEventListener("scroll",()=>{
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
             //改变组件里的visible的对象的flag的值 flag为true可见的 false不可以见
             if(scrollTop>el.offsetHeight){
                binding.value.flag=true  
            }
            else{
                binding.value.flag=false;
            }
     })
})