<template lang="">
    <div class="blog-detail-container">
        <h1>{{blog.title}}</h1>
        <div class="fenlei">
            <span>日期：{{formatDate(blog.createDate)}}</span>
            <span>浏览: {{ blog.scanNumber }}</span>
            <a href="">评论: {{ blog.commentNumber }}</a>
            <a href="">评论: {{ blog.category.name }}</a>
        </div>
        <div v-html="blog.htmlContent">
           
        </div>
    </div>
</template>
<script>
import { formatDate } from "@/utils";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatDate,
  },
};
</script>
<style lang="less">
@import "~@/styles/var.less";
.fenlei {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>