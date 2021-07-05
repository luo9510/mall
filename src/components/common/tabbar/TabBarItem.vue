<template>
  <div class="tab-ber-item" @click="itemClick">
    <div v-if="!isactive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      // default: 'red'
    },
  },
  data() {
    return {};
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tab-ber-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-ber-item img {
  width: 26px;
  height: 26px;
  vertical-align: bottom;
}
</style>