<template>
  <div class="tab">
    <div class="tab-box">
      <div class="tab_title">
        <span>热力费用 DBC名苑-1号楼-101</span>
        <span class="unpaid" @click="payfordetail(1)">已缴费</span>
      </div>
      <div class="tab_list">
        <ul>
          <li>
            <a>房间信息</a>
            <a>102</a>
          </li>
          <li>
            <a>业主名称</a>
            <a>吴琳琳</a>
          </li>
          <li>
            <a>费用时间</a>
            <a>2019-11</a>
          </li>
          <li>
            <a>缴费金额</a>
            <a>1111</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="nomore">— 暂无其他记录 —</div>
  </div>
</template>
<script>

import {GetPayList} from '../../apis/pay'
export default {
  name: "Paid",
  data() {
    return {
      data:[]
    };
  },
  methods: {
    // 详情路由
    payfordetail(type) {
     this.$router.push({
          name: 'Detail',
          params: {
            type: type
          }
        })
    },
    // 列表
    list(){
      var id = 22865;
      var params = {
        status:1
      }
      GetPayList(id,params);
    }
  },
  mounted(){
     this.list();
  }
};
</script>
<style src='../../../static/css/tab.css' scoped>
</style>
