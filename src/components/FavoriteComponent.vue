<template>
    <v-col>
        <v-expansion-panels :elevation="0" v-model="expandedVModel">
            <v-expansion-panel class="elevation-0" :class="`border-success border-opacity-100 ${expandedVModel == 0 ? 'border-sm ' : 'border-b-sm'
                }`">
                <v-expansion-panel-title
                    class="text-uppercase ext-body-2 text-teal-darken-1 font-weight-medium d-flex justify-center"
                    expand-icon="mdi-chevron-down" collapse-icon="mdi-chevron-up">
                    <v-row>
                        <v-col cols="auto">
                            Favorilerim
                        </v-col>
                        <v-col v-if="selectedFavoriteProduct.length" cols="auto px-0">
                            {{ `( ${selectedFavoriteProduct.length} )` }}
                        </v-col>
                    </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-row>
                        <v-col class="px-5">
                            <v-row>
                                <v-col
                                    cols="9 font-weight-light text-h6 py-0 text-teal-darken-1 text-decoration-underline">
                                    Ürün Adı </v-col>
                            </v-row>
                            <v-row>
                                <v-col v-if="selectedFavoriteProduct.length" class="overflow-y-auto overflow-x-hidden my-5"
                                    style="max-height: 600px;">
                                    <v-row v-for="(item, index) in selectedFavoriteProduct" :key="index"
                                        class="border-sm border-opacity-50 border-black rounded-lg mb-2">
                                        <v-col cols="6 py-1 text-overline d-flex align-center"> {{ item.displayName }}
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col v-else>
                                    <v-row>
                                        <v-col cols="8 text-h6 py-0">
                                            - </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-col>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/store/productStore";

const expandedVModel = ref(0);
const productStore = useProductStore();
const { selectedFavoriteProduct } = storeToRefs(productStore);
</script>