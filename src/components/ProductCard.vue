<template>
  <v-card
    width="100%"
    rounded="md"
    class="overflow-y-auto"
    :border="false"
    min-height="1200"
    max-height="2000"
  >
    <v-card-text class="pt-0 px-1">
      <v-row class="d-flex justify-center">
        <v-col
          sm="12"
          md="6"
          lg="4"
          xl="3"
          v-for="(item, index) in productList"
          :key="index"
        >
          <v-card
            width="100%"
            min-height="400px"
            class="fill-height border-a-sm border-opacity-50 border-black elevation-0 rounded-md"
          >
            <v-card-text class="fill-height">
              <v-row class="flex-column">
                <v-col class="my-2">
                  <v-sheet
                    width="100%"
                    border="border-sm border-success opacity-100"
                    height="200px"
                    color="grey-lighten-2"
                  >
                </v-sheet>
                </v-col>
                <v-col v-if="item.stockCount <= 5" >
                  <v-row>
                    <v-spacer />
                    <v-col cols="auto pa-0 text-grey text-overline d-flex align-center">
                      {{ `Kalan Stok Miktarı:` }}
                    </v-col>
                    <v-col cols="auto py-0 text-red font-weight-bold text-decoration-underline text-h6">
                      {{ `${item.stockCount} Adet` }}
                    </v-col>
                  </v-row>
                </v-col>
                <v-col v-else class="py-3">
                  <v-row>
                    <v-spacer />
                    <v-col cols="auto pa-0 text-grey text-caption d-flex align-center">
                      {{ `Maksimum Sipariş Miktarı:` }}
                    </v-col>
                    <v-col cols="auto py-0 text-black font-weight-bold text-overline">
                      {{ `${item.stockCount} Adet` }}
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="fill-height d-flex align-center">
                  <v-row class="flex-column">
                    <v-col
                    class="d-flex justify-center"
                    >
                      <v-rating :model-value="item.rate" readonly active-color="teal-darken-1" half-increments ></v-rating>
                    </v-col>
                    <v-col cols="12"
                      class="font-weight-bold text-center text-body-1 py-0 text-uppercase text-truncate"
                    >
                      {{ item.displayName }}
                    </v-col>
                    <v-col cols="12"
                      class="font-weight-light text-center text-body-1 text-grey py-0 text-truncate"
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
                    @click="selectFavoriteProduct(item.id)"
                  >
                    <v-icon size="25" color="red-darken-1" v-if="!selectedFavoriteProduct.some(e => e.id === item.id)"> mdi-heart-outline </v-icon>
                    <v-icon size="25" color="red-darken-1" v-else> mdi-heart </v-icon>
                  </v-btn>
                  <v-btn
                    width="40%"
                    color="purple-darken-1"
                    :elevation="0"
                    variant="text"
                    class="mx-1"
                    :readonly="item.stockCount === selectedProduct.find(e => e.id === item.id)?.quantity"
                    @click="selectProduct(item.id)"
                  >
                    <v-icon v-if="!selectedProduct.some(e => e.id === item.id)" :color="item.stockCount === selectedProduct.find(e => e.id === item.id)?.quantity ? 'grey-darken-1' :'purple-darken-4'" size="25"
                      >mdi-cart-arrow-down</v-icon
                    >
                    <v-icon v-else :color="item.stockCount === selectedProduct.find(e => e.id === item.id)?.quantity ? 'grey-darken-1' : 'teal-darken-1'" size="25"
                      >mdi-cart-plus</v-icon
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
const {  } = storeToRefs(categoryStore);

const productStore = useProductStore();
const { productList, selectedProduct, selectedFavoriteProduct } = storeToRefs(productStore);
const { selectProduct, selectFavoriteProduct } = productStore;
</script>
