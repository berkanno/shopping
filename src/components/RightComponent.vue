<template>
  <v-row class="flex-column">
    <LoginComponent />
    <CartComponent />
    <FavoriteComponent />
    <FilterComponent />
  </v-row>
</template>
<script lang="ts" setup>
import LoginComponent from "@/components/LoginComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import CartComponent from "@/components/CartComponent.vue";
import FavoriteComponent from "@/components/FavoriteComponent.vue";
</script>
