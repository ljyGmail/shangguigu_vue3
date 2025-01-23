import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  // actions里面放置的是一个一个的动作方法, 用于响应组件中的"动作"
  actions: {
    increment(value) {
      if (this.sum < 10) {
        // 修改数据
        this.sum += value;
      }
    },
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 1,
      school: "atguigu",
      address: "宏福科技园",
    };
  },
});
