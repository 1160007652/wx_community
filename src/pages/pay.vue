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
import Unpaid from "../components/payTabs/Unpaid";
import Paid from "../components/payTabs/Paid";
import {ListCommunities,GetPayList} from '../apis/pay'
export default {
  name: "pay",
  data() {
    return {
      active: 0,
      currentView: "Unpaid",
      tabs: [
        {
          type: "待缴费",
          view: "Unpaid"
        },
        {
          type: "已缴费",
          view: "Paid"
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
    Unpaid,
    Paid
  }
};
</script>

<style src='../../static/css/pay.css' scoped>
</style>