<template>
    <v-card width="100%" class="overflow-y-auto" rounded="md" border="success sm opacity-100" height="700">
        <v-card-text>
            <v-row class="d-flex justify-center">
                <v-col cols="4" v-for="(item, index) in [...productList, ...productList]" :key="index">
                    <v-card width="100%" min-height="400px"
                        class="fill-height border-a-sm border-opacity-50 border-black elevation-0 rounded-md">
                        <v-card-text>
                            <v-row class="flex-column">
                                <v-col>
                                    <v-sheet width="100%" border="border-sm border-success opacity-100" height="200px"
                                        color="grey-lighten-2"></v-sheet>
                                </v-col>
                                <v-col class="fill-height d-flex align-center">
                                    <v-row class="flex-column">
                                        <v-col class="font-weight-bold text-center text-body-1 py-0 text-uppercase">
                                            {{ item.productName }}
                                        </v-col>
                                        <v-col class="font-weight-light text-center text-body-1 text-grey py-0">
                                            {{ item.subtitle }}
                                        </v-col>
                                        <v-col cols="font-weight-bold text-h5 text-black py-0 d-flex align-center justify-center ">
                                            {{ item.price }}
                                        </v-col>
                                        <v-col class="d-flex justify-center" >
                                            <v-btn width="40%" color="teal-darken-4" variant="text" :elevation="0" class="mx-1" >
                                                <v-icon size="25">
                                                    mdi-information-outline
                                                </v-icon>
                                            </v-btn>
                                            <v-btn width="40%" color="purple-darken-1" :elevation="0"  variant="text" class="text-decoration-underline mx-1" >
                                                <v-icon color="purple-darken-4"  size="25">mdi-cart-arrow-down</v-icon>
                                            </v-btn>
                                        </v-col>
                                        <v-col class="d-flex justify-center text-overline font-weight-light py-0">
                                            {{ item.categoryName }}
                                        </v-col>
                                    </v-row>
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
const productList = [
    {
        url: "",
        categoryName: "Elektrik",
        productName: "Elektrik Kablosu",
        subtitle: "29cm",
        price: "300₺",
    },
    {
        url: "",
        categoryName: "Moda",
        productName: "T-Shirt",
        subtitle: "L",
        price: "50₺",
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