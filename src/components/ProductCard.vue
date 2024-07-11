<template>
    <v-card width="100%" class="overflow-y-auto" rounded="md" border="success sm opacity-100" height="700">
        <v-card-text>
          <v-row class="d-flex justify-center overflow-y-auto" >
            <v-col cols="4" v-for="(item, index) in [...productList,...productList]" :key="index">
                 <v-card width="100%" min-height="400px" class="fill-height border-b-sm border-t-0 border-s-0 border-opacity-100 border-success" >
                    <v-card-title>
                          {{ item.productName }}
                    </v-card-title>
                    <v-card-subtitle>
                          {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-card-subtitle>
                          {{ item.price }}
                    </v-card-subtitle>
                 </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
</template>
<script lang="ts" setup>
const productList = [
    {
        url: "",
        categoryName: "Elektrik",
        productName: "Elektrik Kablosu",
        subtitle: "29cm",
        price: "300TL",
    },
    {
        url: "",
        categoryName: "Moda",
        productName: "T-Shirt",
        subtitle: "L",
        price: "50TL",
    },
    {
        url: "",
        categoryName: "Elektrik",
        productName: "Elektrik Kablosu",
        subtitle: "29cm",
        price: "300TL",
    },
    {
        url: "",
        categoryName: "Moda",
        productName: "T-Shirt",
        subtitle: "L",
        price: "50TL",
    },
    {
        url: "",
        categoryName: "Elektrik",
        productName: "Elektrik Kablosu",
        subtitle: "29cm",
        price: "300TL",
    },
    {
        url: "",
        categoryName: "Moda",
        productName: "T-Shirt",
        subtitle: "L",
        price: "50TL",
    },
    {
        url: "",
        categoryName: "Elektrik",
        productName: "Elektrik Kablosu",
        subtitle: "29cm",
        price: "300TL",
    },
    {
        url: "",
        categoryName: "Moda",
        productName: "T-Shirt",
        subtitle: "L",
        price: "50TL",
    },
    {
        url: "",
        categoryName: "Elektrik",
        productName: "Elektrik Kablosu",
        subtitle: "29cm",
        price: "300TL",
    },
    {
        url: "",
        categoryName: "Moda",
        productName: "T-Shirt",
        subtitle: "L",
        price: "50TL",
    },
]
</script>
<style scoped>
::-webkit-scrollbar {
    width: 11px;
    background-color: rgba(173, 177, 177, 0);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(69, 177, 157, 0.409);
    border-radius: 40px;
    cursor: pointer;
  }
</style>