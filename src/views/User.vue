<template>
  <div class="user" @click="go">
    <header>
      <span class="pic"><img src="" alt=""></span>
      
      <span>立即登录</span>
    </header>
    <main>
      <article class="forder">
        
          <figure>
            <van-icon name="coupon-o" />
            <figcaption>电影订单</figcaption>
          </figure>
       
          <figure>
            <van-icon name="notes-o" />
            <figcaption>商品订单</figcaption>
          </figure>
        
      </article>
      <article >
        <div class="fitem" >
          <van-icon name="cashier-o" />
          <span>卖座券</span>
          <van-icon name="arrow"  class="fright"/>
        </div>
        <div class="fitem">
          <van-icon name="cash-on-deliver" />
          <span>组合红包</span>
          <van-icon name="arrow"  class="fright"/>
        </div>
        <div class="fitem">
          <van-icon name="cash-back-record" />
          <span>余额</span>
          <van-icon name="arrow"  class="fright"/>
        </div>
        <div class="fitem">
          <van-icon name="setting-o" />
          <span>设置</span>
          <van-icon name="arrow"  class="fright"/>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  
  methods:{
    go() {
      this.$router.push("/login/");
    }
  }
}
</script>

<style lang="scss">
.user{
  width: 100%;
  background-color: #eee;
  header{
    width: 100%;
    height:3.5rem;
    background-color: #ff5f16;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color:white;
    .pic{
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      border: 1px solid #fff;
      margin-left: 30px;
      margin-right: 5px;;
    }
  }
  main{
    .forder{
      display: flex;
      justify-content: space-around;
      background-color: #fff;
      align-items: center;
      text-align: center;
      font-size: 20px;
      height: 1rem;
      margin-bottom: 5px;
      figcaption{
        font-size: 9px;
      }
    }
    .fitem{
      height: 1rem;
      width: 100%;
      line-height: 1rem;
      border-bottom: 1px solid #eee;
      background-color: #fff;
      padding: 0 10px;
      box-sizing: border-box;
      .fright{
        float: right;
        line-height: 1rem;
      }
    }
  }
}
</style>