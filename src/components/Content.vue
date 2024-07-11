<template>
  <v-row justify="center">
    <v-col cols="10" class="fill-height my-5">
      <v-row>
        <v-col cols="12">
          <CategoryCard />
        </v-col>
        <v-col cols="9" >
          <ProductCard />
        </v-col>
        <v-col cols="3" >
          <v-card width="100%" rounded="xl" border="success sm opacity-100" height="700">
            <v-card-text>
              <v-row class="d-flex justify-center">
                <v-col class="10">
                  
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup lang="ts">
import CategoryCard from "@/components/CategoryCard.vue";
import ProductCard from "@/components/ProductCard.vue";
</script>