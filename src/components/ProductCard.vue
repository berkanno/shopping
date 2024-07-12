<template>
  <v-card
    width="100%"
    rounded="md"
    class="overflow-y-auto"
    :border="false"
    min-height="1200"
    max-height="2000"
  >
    <v-card-text class="pt-0 px-0">
      <v-row class="d-flex justify-center">
        <v-col
          cols="3"
          v-for="(item, index) in productList.filter((e) =>
            categoryNameListForFilter.includes(e.categoryName)
          )"
          :key="index"
        >
          <v-card
            width="100%"
            min-height="400px"
            class="fill-height border-a-sm border-opacity-50 border-black elevation-0 rounded-md"
          >
            <v-card-text class="fill-height">
              <v-row class="flex-column">
                <v-col>
                  <v-sheet
                    width="100%"
                    border="border-sm border-success opacity-100"
                    height="200px"
                    color="grey-lighten-2"
                  ></v-sheet>
                </v-col>
                <v-col class="fill-height d-flex align-center">
                  <v-row class="flex-column">
                    <v-col
                      class="font-weight-bold text-center text-body-1 py-0 text-uppercase"
                    >
                      {{ item.displayName }}
                    </v-col>
                    <v-col
                      class="font-weight-light text-center text-body-1 text-grey py-0"
                    >
                      {{ item.name }}
                    </v-col>
                    <v-col
                      cols="font-weight-bold text-h5 text-black py-0 d-flex align-center justify-center "
                    >
                      {{ item.price }}
                    </v-col>
                    <v-col
                      class="d-flex justify-center text-overline font-weight-light py-0"
                    >
                      {{ item.categoryName }}
                    </v-col>
                    <v-col
                      class="d-flex justify-center text-overline font-weight-light py-0"
                    >
                      {{ item.brandName }}
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="d-flex justify-center fill-height align-end">
                  <v-btn
                    width="40%"
                    color="teal-darken-4"
                    variant="text"
                    :elevation="0"
                    class="mx-1"
                  >
                    <v-icon size="25"> mdi-information-outline </v-icon>
                  </v-btn>
                  <v-btn
                    width="40%"
                    color="purple-darken-1"
                    :elevation="0"
                    variant="text"
                    class="text-decoration-underline mx-1"
                  >
                    <v-icon color="purple-darken-4" size="25"
                      >mdi-cart-arrow-down</v-icon
                    >
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import { useProductStore } from "@/store/productStore";
import { storeToRefs } from "pinia";
import { useCategoryStore } from "@/store/categoryStore";

const categoryStore = useCategoryStore();
const { categoryNameListForFilter } = storeToRefs(categoryStore);

const productStore = useProductStore();
const { productList } = storeToRefs(productStore);
</script>
