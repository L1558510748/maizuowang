<template>
  <div class="login">
    <header>
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt />
    </header>
    <div class="content">
      <article>
        <p>
          <input type="text" placeholder="手机号" v-model="phone" />
          <span id="sm" @click="sm">获取验证码</span>
        </p>
        <p>
          <input type="text" placeholder="验证码" />
        </p>
      </article>
      <article>
        <button id="loginbtn">登录</button>
      </article>
    </div>
  </div>
</template>

<script>
// import {sendMessage} from '@/api'
import axios from "axios";
console.log(axios);
export default {
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    sm() {
      axios
        .post("https://m.maizuo.com/gateway", this.phone, {
          headers: {
            "X-Host": "mall.user.sms-code.send"
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style lang="scss">
.login {
  width: 100%;
  header {
    height: 4rem;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 1.5rem;
    }
  }
  .content {
    width: 100%;
    article {
      width: 100%;
      text-align: center;
      position: relative;
      input {
        height: 0.6rem;
        width: 90%;
        border: none;
        border-bottom: 1px solid #eee;
      }
      #sm {
        position: absolute;
        top: 5px;
        right: 20px;
      }
      #loginbtn {
        width: 90%;
        height: 0.8rem;
        background-color: #ff5f16;
        border: none;
        border-radius: 5px;
        color: white;
      }
    }
  }
}
</style>