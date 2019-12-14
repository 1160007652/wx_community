<template>
  <div class="choiceCommunity-wrap">
    <div class="guass-search">
        <div class="input-wrap">
            <i></i>
            <input type="text" placeholder="庭">
        </div>
    </div>
    <div class="community-cont">
        <p class="add-mb">小区列表</p>
        <div class="search-item">1111</div>
        <div class="search-item">1111</div>
        <div class="search-item">1111</div>
        <div class="search-item">1111</div>
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
    document.querySelector('body').setAttribute('class', '');
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


<style src='../../static/css/choiceCommunity.css' scoped>
</style>