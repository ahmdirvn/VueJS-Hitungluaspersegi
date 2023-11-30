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
    <div>
    <h1>Luas Persegi</h1>
    <p>Sisi: {{ sisi }}</p>
    </div>
</template>