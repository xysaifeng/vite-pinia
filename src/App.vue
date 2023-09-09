<script setup>
import { storeToRefs } from "pinia";
import { useMainStore } from "./stores/main.js";
import { useUserStore } from "./stores/user.ts";
const mainStore = useMainStore();
const userStore = useUserStore();

console.log("userStore: ", userStore);

const { count, double } = storeToRefs(mainStore);
const { name, age, doubleAge } = storeToRefs(userStore);

const { changeAge } = userStore;

const reset = (_) => mainStore.$reset();
</script>

<template>
  <div>
    <p>{{ count }}--{{ double }}</p>

    <p>{{ name }}--{{ age }}--{{ doubleAge }}</p>

    <div>
      <button @click="mainStore.$patch({ count: ++count })">add</button>
      <button @click="mainStore.$patch({ count: --count })">reduce</button>

      <!-- <button @click="count++">add</button>
      <button @click="count--">reduce</button> -->

      <!-- <button @click="mainStore.increment">add</button>
      <button @click="mainStore.decrement">reduce</button> -->
    </div>

    <hr />
    <div>
      <!-- <button @click="age++">addAge</button> -->
      <button @click="changeAge(10)">addAge</button>
      <button @click="age--">reduceAge</button>
    </div>
    <hr />

    <div>
      <button @click="reset">reset</button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
