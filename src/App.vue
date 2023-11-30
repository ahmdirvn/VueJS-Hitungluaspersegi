<script setup>
import { useLuasStore } from './stores/store';
import {computed} from 'vue';
import Header from './components/Header.vue';
import Body from './components/Body.vue';

const store = useLuasStore();
const sisi = computed(() => store.sisi);
const hitungLuas = computed(() => store.luasPersegi);
const tambahSisi = () => store.increment();
const kurangSisi = () => store.decrement();

</script>

<template>
<div>
  <RouterLink :to="{name: 'Home'}" class="nav-link"> Home </RouterLink>
  <RouterLink :to="{name: 'About'}" class="nav-link"> About </RouterLink>

  <!-- render -->
  <RouterView></RouterView>
</div>
</template>

<style scoped>
.nav-link {
  margin: 10px;
}
</style>

