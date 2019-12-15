<template>
  <div class="pay">
    <div class="pay_top">
      <ul>
        <li
          v-for="(tab,index) in tabs"
          @click="toggle(index,tab.view)"
          :class="{active:active==index}"
          :key="index"
        >
          <a>{{tab.type}}</a>
        </li>
      </ul>
    </div>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import RentSaleBox from "../components/rentSaleTabs/RentSaleBox";
import OutherBox from "../components/rentSaleTabs/OutherBox";

// import {ListCommunities,GetPayList} from '../apis/pay'
export default {
  name: "RentSale",
  data() {
    return {
      active: 0,
      currentView: "RentSaleBox",
      tabs: [
        {
          type: "租房",
          view: "RentSaleBox"
        },
        {
          type: "其它",
          view: "OutherBox"
        }
      ],
    };
  },
  methods: {
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    },
    // 
    list(){

    }
  },
  components: {
    RentSaleBox,
    OutherBox
  }
};
</script>

<style src='../../static/css/pay.css' scoped>
</style>