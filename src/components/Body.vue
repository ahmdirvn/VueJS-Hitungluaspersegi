<script setup>
import { useLuasStore } from '../stores/store';
import {computed} from 'vue';
const store = useLuasStore();
const sisi = computed(() => store.sisi);
const hitungLuas = computed(() => store.luasPersegi);
const tambahSisi = () => store.increment();
const kurangSisi = () => store.decrement();
</script>

<template>
    
    <p>Luas Persegi: {{ hitungLuas }}</p>
    <button @click="tambahSisi">Tambah Sisi</button>
    <button @click="kurangSisi">Kurang Sisi</button>

</template>