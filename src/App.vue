<template>
  <div id="app">
    <router-view />
    <div id="footer" >
      <figure>
        <router-link to="/film">
          <van-icon name="video-o" />
          <figcaption>电影</figcaption>
        </router-link>
      </figure>

      <figure>
        <router-link to="/cinema">
          <van-icon name="hotel-o" />
          <figcaption>影院</figcaption>
        </router-link>
      </figure>
      <figure>
        <router-link to="/info">
          <van-icon name="newspaper-o" />
          <figcaption>资讯</figcaption>
        </router-link>
      </figure>

      <figure>
        <router-link to="/user">
          <van-icon name="contact" />
          <figcaption>我的</figcaption>
        </router-link>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~@/assets/css/reset.css";
.tabbar {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  li {
    flex: 1;
    text-align: center;
  }
}
#footer {
  position: fixed;
  background-color: #fff;
  bottom: 0;
  height: 0.9rem;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  width: 100%;
  .active {
    color: #0084ff;
  }
  figure {
    
    flex: 1;
    padding: 0;
    margin: 0;
    text-align: center;
    figcaption{

      font-size: 12px;
    }
  }
}
.router-link-active {
  color: red;
}
</style>
