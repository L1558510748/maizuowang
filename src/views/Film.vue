<template>
  <div class="box">
    <header>
      <ul>
        <li>
          <router-link to="/film/nowplaying" :style="{color:colornow}"><span> 正在热映</span></router-link>
        </li>
        <li >
          <router-link to="/film/comingsoon" ><span :style="{color:colorsoon}">即将上映</span> </router-link>
        </li>
      </ul>
      <div class="headerLine" :style="{transform:`translateX(${style})`}"></div>
    </header>
    <div class="content">
      <ul>
        <li v-for="item in films" :key="item.filmId" @click="go(item.filmId)">
          <img :src="item.poster" />
          <article>
            <aside class="aside_l">
              <p>
                <span class="filmname">{{item.name}}</span>
                <span class="filmtype">{{item.filmType.name}}</span>
              </p>
              <p >
                <span v-show=show>观众评分:</span>
                <span class="grade">{{item.grade}}</span>
              </p>
              <p>
                <span>主演:</span>
                <span>{{actor(item.actors)}}</span>
              </p>
              <p v-if="$route.path==='/film/nowplaying'">
                <span>{{item.nation}}</span>|
                <span>{{item.runtime}}分钟</span>
              </p>
              <p v-else>
                  <span>上映日期：</span>
                  <span>{{date(item.premiereAt)}}</span>
              </p>
            </aside>
            <aside class="aside_r">
              <button v-show=show>购票</button>
            </aside>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getFilm } from "@/api";
export default {
  data() {
    return {
      films: [],
      actors: "",
      flag:true
    };
  },
  computed: {
    style() {
      return this.$route.path === "/film/nowplaying" ? "0" : "265%";
    },
    colorsoon(){
        return this.$route.path==="/film/nowplaying"?"#333":"#ff5f16";
    },
    colornow(){
         return this.$route.path==="/film/comingsoon"?"#333":"#ff5f16";
    },
    show(){
        return this.$route.path==="/film/nowplaying"?true:false
    }

  },
  watch: {
    $route: {
      handler(n) {
        var type = n.params.type === "nowplaying" ? 1 : 2;
        getFilm(type).then(res => {
          console.log(res);
          this.films = res.data.films;
          this.actors = this.films.actors;
        });
      },
      immediate: true
    }
  },
  methods: {
    go(filmid) {
      this.$router.push("/detail" + filmid);
    },
    actor(item) {
      var actors = "";

      console.log(item);
      item.forEach(item => {
        actors += item.name + " ";
      });
      return actors;
    },
    date(time){
       
        return new Date(time*1000).toLocaleString().split(" ")[0]+"上映";
    }
  }
};
</script>

<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  header {
    height: 0.85rem;
    width: 100%;
border-bottom: 1px solid #ccc;
    ul {
      display: flex;
      
      li {
        height: 0.8rem;
        line-height: 0.8rem;
        flex: 1;
        text-align: center;
        
        font-weight: 500;
        
        
      }
    }
    .headerLine {
      border-bottom: 0.05rem solid #ff5f16;
      width: 1.4rem;
      position: relative;
      left: 1.2rem;
      transition: all 500ms;
    }
  }
  .content {
    flex: 1;
    width: 100%;
    background-color: #fff;
    overflow-y: auto;
    ul {
      width: 100%;

      li {
        padding: 15px;
       width: 100%;
        box-sizing: border-box;
        height: 2.64rem;
        
        display: flex;
        background-color: #fff;
        img {
          height: 1.8rem;
          width: 20%;
          box-sizing: border-box;
        }
        article {
          display: flex;
          width:80%;
          box-sizing: border-box;
          justify-content: space-between;
          .aside_l {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 10px;
            box-sizing: border-box;
            width: 80%;
            p {
              height: 20px;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding: 0;
              margin: 0rem;
              text-align: left;
              font-size: 13px;
              span {
                color: #888;
              }
              .filmname {
                font-size: 16px;
                color: #333;
              }
              .filmtype {
                background-color: #ccc;
                color: #fff;
                height: 0.3rem;
              }
              .grade {
                color: #ff5f16;
              }
            }
          }
          .aside_r {
            width: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
              height: 0.6rem;
              width: 1rem;
              border: #ff5f16 1px solid;
              background-color: #fff;
              color: #ff5f16;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}
</style>