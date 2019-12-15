<template>
  <div class="tab-rent-sale">
    <ul class="tab-rent-sale-box">
      <li v-for="(box,index) in boxs" :key="index"> 
        <img src="../../assets/rent-sale-outher-tmp.jpg"/>
        <p>{{box.info}}</p>
        <div class="view">
          <img src="../../assets/rent-sale-outher-tmp.jpg" width="14" height="14"/>
          <span class="name">{{box.name}}</span>
          <span class="value">{{box.value}}</span>
        </div>
      </li>
    </ul>
    <div class="nomore">— 暂无其他记录 —</div>
  </div>
</template>
<script>

export default {
  name: "OutherBox",
  data() {
    return {
      boxs: [
        {
          src: '../../assets/rent-sale-tmp.jpg',
          headSrc: '../../assets/rent-sale-tmp.jpg',
          info: '现有两房一厅，全家私出租，小伙伴有需要的可联系。',
          name: '依依妈',
          value: '￥2300/月'
        },
        {
          src: '../../assets/rent-sale-tmp.jpg',
          headSrc: '../../assets/rent-sale-tmp.jpg',
          info: '现有两房一厅，全家私出租，小伙伴有需要的可联系。',
          name: '依依妈',
          value: '￥2300/月'
        },
        {
          src: '../../assets/rent-sale-tmp.jpg',
          headSrc: '../../assets/rent-sale-tmp.jpg',
          info: '现有两房一厅，全家私出租，小伙伴有需要的可联系。',
          name: '依依妈',
          value: '￥2300/月'
        },
        {
          src: '../../assets/rent-sale-tmp.jpg',
          headSrc: '../../assets/rent-sale-tmp.jpg',
          info: '现有两房一厅，全家私出租，小伙伴有需要的可联系。',
          name: '依依妈',
          value: '￥2300/月'
        },
        {
          src: '../../assets/rent-sale-tmp.jpg',
          headSrc: '../../assets/rent-sale-tmp.jpg',
          info: '现有两房一厅，全家私出租，小伙伴有需要的可联系。',
          name: '依依妈',
          value: '￥2300/月'
        },
        {
          src: '../../assets/rent-sale-tmp.jpg',
          headSrc: '../../assets/rent-sale-tmp.jpg',
          info: '现有两房一厅，全家私出租，小伙伴有需要的可联系。',
          name: '依依妈',
          value: '￥2300/月'
        }
      ]
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
      // GetPayList(id,params);
    }
  },
  mounted(){
     this.list();
  }
};
</script>
<style src='../../../static/css/tabRentSale.less' lang="less" scoped>
</style>
