// 入口文件
import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


import * as blogApi from "./api/blog.js";
/* 获取单个博客 */
// blogApi.getBlog("asdfassf").then((r) => {
//   console.log(r);
// });

/* 提交评论*/
// blogApi.postComment({
//   nickname: "昵称",
//   content: "评论内容，纯文本",
//   blogId: '123'
// }).then((r) => {
//   console.log(r);
// });


/*分页获取评论*/
// blogApi.getComments("asdfassf").then((r) => {
//   console.log(r);
// });