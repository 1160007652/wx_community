<template>
  <div class="main_box">
    <div class="roll">
      <!-- 定位 -->
      <div class="Location">
        <ul>
          <span class="Location_title">亚运城南荣花园小区</span>
          <img src="../assets/Arrow.png" @click="indexforsearch"/>
          <p class="lastmonth">上月服务评价</p>
        </ul>
        <div class="Location_msg" >
          <img src="../assets/msg.png" />
        </div>
      </div>
      <!-- 轮播 -->
      <div class="wrapper">
        <swiper :options="swiperOption" >
          <!-- slides -->
          <swiper-slide v-for="(item,index) in listimg" :key="index">
            <img :src="item.img" :key="index"/>
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
      </div>
      <!-- 认证 -->
      <div class="Authentication">
        <router-link to="/identity" class="nav-link">
          <img src="../assets/renzheng.png" />
        </router-link>
      </div>
      <!-- 保修 -->
      <div class="Property">
        <div class="box" @click="confirm">
          <img src="../assets/box_2.png" />
        </div>
        <div class="box">
          <router-link to="/pay" class="nav-link">
            <img src="../assets/box_1.png" />
          </router-link>
        </div>
      </div>
      <!-- 菜单栏 -->
      <div class="menu">
        <ul>
          <router-link to="/rentSale" tag="li" class="nav-link">
            <img src="../assets/rentout.png" />
            <a>租售服务</a>
          </router-link>
          <li @click="confirm">
            <img src="../assets/tzgg.png" />
            <a>通知公告</a>
          </li>
          <li @click="confirm">
            <img src="../assets/lxwy.png" />
            <a>联系物业</a>
          </li>
          <li @click="confirm">
            <img src="../assets/bj.png" />
            <a>便捷服务</a>
          </li>
        </ul>
        <ul class="pdt-15">
          <li @click="confirm">
            <img src="../assets/jfsc.png" />
            <a>积分商城</a>
          </li>
          <li @click="confirm">
            <img src="../assets/jzfw.png" />
            <a>家政服务</a>
          </li>
          <li @click="confirm">
            <img src="../assets/jrfw.png" />
            <a>金融服务</a>
          </li>
          <li @click="confirm">
            <img src="../assets/gdfw.png" />
            <a>更多服务</a>
          </li>
        </ul>
      </div>
      <!-- 通知 -->
      <div class="notice">
        <div class="notice_title">
          <img src="../assets/notice.png" />
        </div>
        <div class="notice_list">
          <ul>
            <li>
              <span>社区精彩活动，欢迎大家踊跃报名，报名时间…</span>
              <img src="../assets/hot.png" />
            </li>
            <li>
              <span>元宵节，家人聚，起家欢快来分享你的全家照…</span>
              <img src="../assets/hot.png" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 服务 -->
      <div class="service_box">
        <div class="service">
          <div class="service_title">
            <span class="tips"></span>
            <span class="msg">服务推荐</span>
          </div>
          <div class="service_list">
            <ul>
              <li>
                <span>
                  <img src="../assets/bag.png" />
                </span>
                <span class="text">
                  <p>积分商城</p>积分兑换，好礼不断
                </span>
                <span class="button" @click="confirm">详情</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <img src="../assets/mydy.png" />
                </span>
                <span class="text">
                  <p>猫眼电影</p>积分兑换，畅享大片
                </span>
                <span class="button" @click="confirm">详情</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <img src="../assets/ddcx.png" />
                </span>
                <span class="text">
                  <p>滴滴出行</p>安全出行，优惠不断
                </span>
                <span class="button" @click="confirm">详情</span>
              </li>
            </ul>
            <div class="textc">
              <div class="service_list_button" @click="confirm">查看更多</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 热点 -->
      <div class="hot_box">
        <div class="hot">
          <ul>
            <li class="top_">
              <p class="top_title">双11大家都买了哪些东西，看看你在本小区排第几…</p>
              <img src="../assets/test.png" />
              <div class="hot_tips">
                <span>#热点</span>
                <span>2829阅读</span>
              </div>
            </li>
            <li class="left_">
              <div class="left">
                <p class="top_title">家家有本难念经，家庭和睦才是最重要欢迎大家来吐槽…</p>
                <div class="hot_tips">
                  <span>#热点</span>
                  <span>2829阅读</span>
                </div>
              </div>
              <div class="right">
                <img src="../assets/test2.png" />
              </div>
            </li>
            <li class="left_">
              <div class="left">
                <p class="top_title">家家有本难念经，家庭和睦才是最重要欢迎大家来吐槽…</p>
                <div class="hot_tips">
                  <span>#热点</span>
                  <span>2829阅读</span>
                </div>
              </div>
              <div class="right">
                <img src="../assets/test2.png" />
              </div>
            </li>
          </ul>
          <div class="textc">
            <div class="service_list_button" @click="confirm">全部话题</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部菜单 -->
    <div class="footer">
      <ul>
        <li>
          <img src="../assets/index.png" />
          <a class="active">首页</a>
        </li>
        <li @click="confirm">
          <img src="../assets/shequ.png" />
          <a>社区</a>
        </li>
        <li @click="confirm">
          <img src="../assets/sh.png" />
          <a>生活</a>
        </li>
        <li @click="indexformy">
          <img src="../assets/me.png" />
          <a>我的</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style src='../../static/css/index.css' scoped>
</style>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Index",
  data() {
    return {
      listimg: [
        { img: require("../assets/banner1.png") },
        { img: require("../assets/banner2.png") }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false //用户操作swiper之后，是否禁止autoplay。
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    confirm() {
      this.$alert("功能未开放");
    },
    indexforsearch(type) {
     this.$router.push({
          name: 'ChoiceCommunity',
        })
    },
    indexformy(type) {
     this.$router.push({
          name: 'Myself',
        })
    },
  }
};
</script>