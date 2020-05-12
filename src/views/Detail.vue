<template>
  <div class="detail">
    <header>
      <div class="header" v-gd="visible" v-show="visible.flag">
        <span @click="$router.go(-1)" id="back"><van-icon name="arrow-left" /></span><span id="fname">{{film.name}}</span> 
      </div>
      <img :src="film.poster" alt />
    </header>
    <div class="content">
      <div class="det">
        <article class="col">
          <aside>
            <span class="filmname">{{film.name}}</span>
            <span class="filmtype">{{film.filmType&&film.filmType.name}}</span>
          </aside>
          <aside>
            <span class="filmgrade" v-show="film.grade">
              <i>{{film.grade}}</i>分
            </span>
          </aside>
        </article>
        <p>
          <span>{{film.category}}</span>
        </p>
        <p>
          <span>{{date(film.premiereAt)}}</span>
        </p>
        <p>
          <span>{{film.nation}}</span> |
          <span>{{film.runtime}}分钟</span>
        </p>
        <p id="synopsis">{{film.synopsis}}</p>
        <p class="down" @click="style">
          <van-icon name="arrow-down" v-if="flag" />
          <van-icon name="arrow-up" v-if="!flag" />
        </p>
      </div>
    </div>
    <div class="actors">
      <p class="actors_title">演职人员</p>
      <div class="scrollactors">
       
        <ul>
          <li v-for="(item,index) in film.actors" :key="index">
            <figure>
              <img :src="item&&item.avatarAddress" alt />
              <figcaption>
              
              <p>{{item.name}}</p>
              <p>{{item.role}}</p>

              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
      
    </div>
    <div class="photos">
       <p>剧照</p>
        <ul>
          <li v-for="(item,index) in film.photos" :key="index">
          
              <img :src="item" alt />
          </li>
        </ul>
      </div>
      <footer>
        选座购票
      </footer>
  </div>
  
</template>

<script>
import { getDetail } from "@/api";
export default {
  data() {
    return {
      film: "",
      flag: true,
      visible: {
        flag: false
      }
    };
  },
  mounted() {
    getDetail(this.$route.params.id).then(res => {
      this.film = res.data.film;
      console.log(this.film);
    });
  },
  methods: {
    date(time) {
      return new Date(time * 1000).toLocaleString().split(" ")[0] + "上映";
    },
    style() {
      if (this.flag) {
        document.getElementById("synopsis").style.overflow = "visible";
        document.getElementById("synopsis").style.height = "auto";
        document.getElementsByClassName("content")[0].style.overflow =
          "visible";
      } else {
        document.getElementById("synopsis").style.overflow = "hidden";
        document.getElementById("synopsis").style.height = 40 + "px";
        document.getElementsByClassName("content")[0].style.overflow = "hidden";
      }

      this.flag = !this.flag;
      console.log(this.flag);
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  width: 100%;
  margin-bottom: .8rem;
  background-color: #eee;
  header {
    width: 100%;
      background-color: #fff;
    .header{
      position: fixed;
      width: 100%;
      top: 0;
      height: .8rem;
      display: flex;
      align-items: center;
      background-color: #fff;
      justify-content: space-around;
      #back{
        width: 5%;
        height: 17px;
        text-align: center;
      }
      #fname{
        width:95%;
        padding-left: 2.5rem;
        box-sizing: border-box;
        font-size: 20px;
        font-weight: 500;
      }
    }
    height: 4.1rem;
    // border: 1px solid;
    background: #ccc;
    width: 100%;
    img {
      width: 100%;
      height: 4.1rem;
    }
  }
  .content {
    // height: 4rem;
    background-color: #fff;
    overflow: hidden;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    article {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      aside {
        text-align: center;
        height: 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .filmtype {
          background-color: #ccc;
          color: white;
          height: 14px;
          font-size: 9px;
          line-height: 24px;
        }
        .filmname {
          margin-right: 5px;
        }
      }
      .filmgrade {
        color: #ff5f16;
      }
    }
    p {
      margin-top: 4px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      color: #888;
      .col {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    #synopsis {
      
      margin-top: 12px;
      // height: 40px;
      width: 100%;
      height: 40px;
      overflow: hidden;
    }
    .down {
      text-align: center;
      margin-top: 12px;
    }
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.actors {
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 4rem;
  p{
          margin-left: 5px;
        }
  .scrollactors {
    height: 3.2rem;
    width: 100%;
    overflow: hidden;
    ul {
      height: 100%;
      flex: 1;
      width: 100%;
      display: flex;
      overflow-x: auto;
      padding: 0;
      margin: 0;
      li {
        height: 100px;
        width: 100px;
  figure{
    padding: 0;
      margin:0 5px;
      p{
        padding: 0;
      margin:0 5px;
      font-size: 9px;
      text-align: center;
      }
  }
        // flex-shrink: 0;
        padding: 0;
        margin: 0;
        img {
          height: 100px;
          width: 100px;
        }
      }
    }
  }
}
.photos{
  width: 100%;
  background-color: #fff;
  p{
          margin-left: 5px;
        }
  ul {
      height: 100%;
      flex: 1;
      width: 100%;
      display: flex;
      overflow-x: auto;
      padding: 0;
      margin: 0;
      li {
        height: 100px;
        width: 150px;
        
        // flex-shrink: 0;
        padding: 0;
        margin: 0 5px;
        img {
          height: 100px;
          width: 150px;
        }
      }
    }
}
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ff5f16;
  color:white
}
</style>