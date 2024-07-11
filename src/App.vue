<template>
  <v-app>
    <v-app-bar-comp />
    <v-container fluid class="pa-0 bg-white fill-height">
      <v-layout class="fill-height d-flex align-center justify-center">
        <Content />
      </v-layout>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import VAppBarComp from "@/components/VAppBarComp.vue";
import Content from "@/components/Content.vue";
</script>
