<template>
  <div>
    <div id="box" v-show="false" style="width:100%;height:300px;"></div>
    <van-index-bar>
      <div v-for="item in letters" :key="item">
        <van-index-anchor :index="item" />
        <van-cell
          @click="saveCityNameId(subItem.name,subItem.cityId)"
          :title="subItem.name"
          v-for="subItem in cityObj[item]"
          :key="subItem.cityId"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getLocation } from "@/util/Location";
// import { mapMutations } from "vuex";
import { getCities } from "@/api/index";
export default {
  methods: {
    
    // ...mapMutations(["setName", "setId"]),
    saveCityNameId(name, id) {
      console.log(name,id)
      localStorage.setItem("cityName", name);
      localStorage.setItem("cityId", id);
      if(localStorage.getItem("cityId")){
        this.$router.push("/film");
      }
      // this.$router.push("/film");
      // this.setName(name);
      // this.setId(id);
    },

  },
  data() {
    return {
      sortCities: [], //排好序的城市列表
      cityObj: {}, // {'A':['..','..'],'B':['...','...']}
      letters: []
    };
  },
  created() {
    getCities().then(res => {
      this.sortCities = res.data.cities.sort((a, b) =>
        a.pinyin.localeCompare(b.pinyin)
      );
      res.data.cities.forEach(item => {
        var firstLetter = item.pinyin[0].toUpperCase();
        if (!this.cityObj[firstLetter]) {
          this.cityObj[firstLetter] = [];
        }
        this.cityObj[firstLetter].push({
          cityId: item.cityId,
          name: item.name,
          pinyin: item.pinyin,
          isHot: item.isHot
        });
      });
      this.letters = Object.keys(this.cityObj);
      console.log(this.letters);
      getLocation("box", cityName => {
        console.log(cityName);
        cityName = cityName.replace("市", "");
        if (cityName) {
          // var id = this.sortCities.filter(item => item.name === cityName)[0]
          //   .cityId;
          // this.saveCityNameId(cityName, id);
        }
      });
    });
  }
};
</script>

<style>
</style>