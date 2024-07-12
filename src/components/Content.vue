<template>
  <v-row justify="center">
    <v-col cols="12 pt-0">
      <CategoryCard />
    </v-col>
    <v-col cols="10" class="fill-height my-5">
      <v-row>
        <v-col cols="9">
          <ProductCard />
        </v-col>
        <v-col cols="3" >
          <RightComponent />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import CategoryCard from "@/components/CategoryCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import RightComponent from "@/components/RightComponent.vue";
</script>
