<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-img" src="~assets/img/tabbarimg/home.png" alt="" />
      <img slot="item-img-active" src="~assets/img/tabbarimg/home-active.png" alt=""/>
      <div slot="item-text">首頁</div>
    </tab-bar-item>
    <tab-bar-item path="/categary" activeColor="red">
      <img slot="item-img" src="~assets/img/tabbarimg/categray.png" alt="" />
      <img slot="item-img-active" src="~assets/img/tabbarimg/categray-active.png" alt="">
      <div slot="item-text">分類</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-img" src="~assets/img/tabbarimg/shop.png" alt="" />
      <img slot="item-img-active" src="~assets/img/tabbarimg/shop-active.png" alt=""/>
      <div slot="item-text">購物車</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-img" src="~assets/img/tabbarimg/profile.png" alt="" />
      <img slot="item-img-active" src="~assets/img/tabbarimg/profile-active.png" alt=""/>
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>