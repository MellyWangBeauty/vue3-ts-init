<template>
  <el-button @click="toLogin">登录</el-button>
  <h2>{{ exampleStore.name }}</h2>
  <button @click="changeName">修改名称</button>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { useExampleStore } from "../stores/exampleStore.ts";

const exampleStore = useExampleStore();
const router = useRouter();
function toLogin() {
  router.push({
    name: "index",
  });
}
const changeName = () => {
  exampleStore.name = "嘿嘿";
};
</script>
