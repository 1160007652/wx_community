<template>
  <div class="mayself-wrap">
    <div class="mayself-bg">
        <div class="header-cont">
            <div class="header-set">
                <i></i>设置
            </div>
            <div class="header-img">
                <div class="user-img">
                    <a href="" class="m-img-box">
                        <img src="" alt="">
                        <i class="icon-authen"></i>
                    </a>
                </div>
                <p class="txt-name">李文家</p>
                <div class="user-option">
                    <div class="option-item add-mr">
                        <span class="txt-num">10</span><span>优惠券</span>
                    </div>
                    <div class="option-item">
                        <span class="txt-num">10</span><span>积分</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="mayself-content">
        <div class="mayself-top">
            <div class="top-infos">
                <div><i class="icon icon-declaration"></i><p>报事工单</p></div>
                <div><i class="icon icon-shipped"></i><p>商城订单</p></div>
                <div><i class="icon icon-house"></i><p>我的房屋</p></div>
                <div><i class="icon icon-pay"></i><p>缴费记录</p></div>
            </div>
        </div>
        <ul class="mayself-list">
            <li class="cont-item">我的活动</li>
            <li class="cont-item">我的二维码</li>
        </ul>
        <ul class="mayself-list">
            <li class="cont-item">帮助与反馈</li>
            <li class="cont-item">关于我们</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
    };
  },
  mounted() {
    document.querySelector('body').setAttribute('class', 'bg-f5');
    },
  methods: {
    goToPath(path) {
      this.$router.push(path);
    }
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('class');
  }
};
</script>


<style src='../../static/css/myself.css' scoped>
</style>