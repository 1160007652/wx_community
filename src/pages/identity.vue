<template>
  <div class="identity">
     <div class='title'>为了保障本社区内的住户能够享受高品质的服务，请提供您的真实信息以供物业中心进行验</div>
     <div class="table">
       <input placeholder="请输入姓名">
       <input placeholder="请输入证件号">
       <input placeholder="请输入性别">
     </div>
     <div class="h"></div>
     <div class="table">
       <input placeholder="亚运城男花荣校区">
       <input placeholder="请输入房间号">
       <input placeholder="请选择身份">
     </div>
    <div class="textc">
          <div class="table_list_button">跳过，逛逛该社区</div>
          <div class="table_list_button_other">提交认证</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Identity',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style src='../../static/css/identity.css' scoped>
</style>
