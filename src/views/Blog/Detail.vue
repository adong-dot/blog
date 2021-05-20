<template>
  <!-- <div>博客詳情,id:{{ this.$route.params.id }}</div> -->
  <Layout>
    <div class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
    </div>
    <template #right>
      <BlogTOC />
    </template>
  </Layout>
</template>
<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
  },
  mixins: [fetchData(null)],
  methods: {
    async fetchData() {
      return await getBlog();
    },
  },
};
</script>
<style lang="less" scoped>
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
}
</style>   