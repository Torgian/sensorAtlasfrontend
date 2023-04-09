<template lang="pug">
div
    h1 Hello
    h2 Filters!
    span(v-for="filter in store.filtersList") {{ filter }},
</template>
<script setup lang="ts">
import { useFiltersStore } from '~/stores/filters'

const store = useFiltersStore()
</script>