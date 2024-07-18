<template>
  <v-row class="flex-column">
    <LoginComponent />
    <FilterComponent />
    <v-col>
      <v-expansion-panels :elevation="0" v-model="expandedThirdVModel">
        <v-expansion-panel
          class="elevation-0"
          :class="`border-success border-opacity-100 ${
            expandedThirdVModel == 0 ? 'border-sm ' : 'border-b-sm'
          }`"
        >
          <v-expansion-panel-title
            class="text-uppercase ext-body-2 text-teal-darken-1 font-weight-medium d-flex justify-center"
            expand-icon="mdi-chevron-down"
            collapse-icon="mdi-chevron-up"
            >
            <v-row>
             <v-col cols="auto">
            Sepet  
             </v-col>
             <v-col cols="auto px-0 text-red">
             ( 5 )  
             </v-col>
            </v-row>
            </v-expansion-panel-title
          >
          <v-expansion-panel-text> Some content </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col class="pt-0">
      <v-expansion-panels :elevation="0" v-model="expandedFourthVModel">
        <v-expansion-panel
          class="elevation-0"
          :class="`border-success border-opacity-100 ${
            expandedFourthVModel == 0 ? 'border-sm ' : 'border-b-sm'
          }`"
        >
          <v-expansion-panel-title
            class="text-uppercase text-body-2 text-teal-darken-1 font-weight-300 d-flex justify-center"
            expand-icon="mdi-chevron-down"
            collapse-icon="mdi-chevron-up"
            >
            <v-row>
             <v-col cols="auto">
            Favorİlerİm  
             </v-col>
             <v-col cols="auto px-0 text-red">
             ( 2 )  
             </v-col>
            </v-row>
            </v-expansion-panel-title
          >
          <v-expansion-panel-text> Some content </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>
<script lang="ts" setup>
import LoginComponent from "@/components/LoginComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";
import { ref } from "vue";

const expandedThirdVModel = ref(0);
const expandedFourthVModel = ref(0);
</script>
