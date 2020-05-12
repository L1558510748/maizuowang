<template>
  <div class="cinema">
    <header>
      <article class="title_bar">
        <span @click="go">{{cityName}}</span>
        <span>影院</span>
        <span>
          <van-icon name="search" />
        </span>
      </article>
      <article class="change">
        <aside>
          <select v-model="type">
            <option value="all">全城</option>
            <option v-for="item in district" :key="item" :value="item">{{item}}</option>
          </select>
        </aside>
        <aside>
          <select name="buyticket" id="buyticket">
            <option value="app">App订票</option>
            <option value="local">前台兑换</option>
          </select>
        </aside>
        <aside>
          <select name="near" id>
            <option value="before">最近去过</option>
            <option value="nearly">距离最近</option>
          </select>
        </aside>
      </article>
    </header>
    <main>
      <ul>
        <li v-for="(item,index) in filterList" :key="index">
          <aside class="aside_l"><p class="cname">{{item.name}}</p>
          <p class="adress">{{item.address}}</p></aside>
          <aside class="lowpri">￥{{item.lowPrice/100}}起</aside></li>
      </ul>
    </main>
  </div>
</template>

<script>
import { getCinema } from "@/api";
export default {
  methods:{
    go(){
      this.$router.push("/city")
    }
  },
  computed: {
    //根据区拿到对应影院
    filterList() {
      if (this.type === "all") {
        return this.cinemas;
      } else {
        return this.obj[this.type];
      }
    }
  },
  data() {
    return {
      cityName:"",
      cinemas: [], //保存电影院
      district: [], //保存区
      obj: {}, //按区划分影院
      type: "all" //当前的区 全城用all表示
    };
  },
  created() {
    this.cityName=localStorage.getItem("cityName")
    var id=localStorage.getItem("cityId")
    getCinema(id).then(res => {
      if (res.status === 0) {
        this.cinemas = res.data.cinemas;
        this.cinemas.forEach(item => {
          //按区划分影院
          if (!this.obj[item.districtName]) {
            this.obj[item.districtName] = [];
          }
          this.obj[item.districtName].push(item);
        });
        this.district = Object.keys(this.obj); //提取区到一个数组里
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.cinema {
  width: 100%;
  header {
    position: fixed;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #eee;
    .title_bar {
      width: 100%;
      height: 0.8rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
    .change {
      width: 100%;
      width: 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.8rem;
      
      #buyticket:checked{
        
        color: #ff5f16;
      
      }
      option{
        color: #ff5f16;
      }
    }
  }

  main {
    width: 100%;
    ul {
      li {
        height: 1.6rem;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        align-content: center;
        padding: 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        .aside_l{
          width: 80%;
        }
        p{
          padding: 0;
          margin: 5px 0;
        }
        .cname{
          font-size: 15px;
        }
        .adress{
          color: #888;
          font-size: 9px;
        }
        .lowpri{
          color:#ff5f16;
          width: 20%;
          text-align: right;
        }
      }
    }
  }
}
</style>