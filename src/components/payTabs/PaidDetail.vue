<template>
  <div class="detail">
    <div class="detail-box">
      <div class="detail_title">
        <span>2019年12月</span>
        <!-- <span class="unpaid">12月></span> -->
      </div>
      <div class="detail_list">
        <ul>
          <li>
            <a>所属小区</a>
            <a>102</a>
          </li>
          <li>
            <a>所属楼号</a>
            <a>吴琳琳</a>
          </li>
          <li>
            <a>房间号码</a>
            <a>2019-11</a>
          </li>
          <li>
            <a>业主姓名</a>
            <a>1111</a>
          </li>
          <li>
            <a>费用类型</a>
            <a>1111</a>
          </li>
          <li>
            <a>房屋面积</a>
            <a>1111</a>
          </li>
          <li>
            <a>单价(元)</a>
            <a>1111</a>
          </li>
          <li>
            <a>金额(元)</a>
            <a>1111</a>
          </li>
        </ul>
      </div>
      <div class="btnbox" v-if="this.$route.params.type===2">
         <div class="payBtn">立即缴费</div>
         <p class="tipshow">温馨提示：使用农信卡送积分哦</p>
      </div>
      <div class="btnbox" v-if="this.$route.params.type===1">
         <div class="payBtn_yet">已缴费</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaidDetail",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style src='../../../static/css/detail.css' scoped>
</style>
