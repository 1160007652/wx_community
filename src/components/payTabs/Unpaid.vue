<template>
  <div class="tab">
    <div class="tab-box">
      <div class="tab_title">
        <span>热力费用 DBC名苑-1号楼-101</span>
        <span  @click="payfordetail(2)">待缴费</span>
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
export default {
  name: "Unpaid",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
   methods: {
    payfordetail(type) {
     this.$router.push({
          name: 'Detail',
          params: {
            type: type
          }
        })
    }
  }
};
</script>
<style src='../../../static/css/tab.css' scoped>
</style>

