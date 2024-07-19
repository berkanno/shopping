<template>
    <v-col class="py-0">
        <v-expansion-panels :elevation="0" v-model="expandedVModel">
            <v-expansion-panel class="elevation-0" :class="`border-success border-opacity-100 ${expandedVModel == 0 ? 'border-sm ' : 'border-b-sm'
                }`">
                <v-expansion-panel-title
                    class="text-uppercase ext-body-2 text-teal-darken-1 font-weight-medium d-flex justify-center"
                    expand-icon="mdi-chevron-down" collapse-icon="mdi-chevron-up">Sepet</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-row>
                        <v-col class="px-5">
                            <v-row>
                                <v-col
                                    cols="6 font-weight-light text-h6 py-0 text-teal-darken-1 text-decoration-underline">
                                    Ürün Adı </v-col>
                                <v-spacer />
                                <v-col
                                    cols="6 font-weight-light text-h6 py-0 text-teal-darken-1 text-decoration-underline text-center">
                                    Miktar <v-icon class="text-orange-darken-1 elevation-0" icon="mdi-swap-horizontal"
                                        color="transaparent" @click="() => isCartInputIcon = !isCartInputIcon"></v-icon>

                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col v-if="selectedProduct.length" class="overflow-y-auto overflow-x-hidden my-5"
                                    style="max-height: 600px;">
                                    <v-row v-for="(item, index) in selectedProduct" :key="index"
                                        class="border-sm border-opacity-50 border-black rounded-lg mb-2">
                                        <v-col cols="6 py-1 text-overline d-flex align-center"> {{ item.displayName }}
                                        </v-col>
                                        <v-spacer />
                                        <v-col cols="6 d-flex align-center">
                                            <v-row justify="center">
                                                <v-col cols="auto pa-0">
                                                    <v-btn
                                                        :icon="`${item.quantity == 1 ? 'mdi-trash-can' : 'mdi-minus'}`"
                                                        :elevation="0" color="transparent"
                                                        :class="`${item.quantity == 1 ? 'text-red' : 'text-orange-darken-1'}`"
                                                        @click="() => item.quantity == 1 ? selectedProduct = selectedProduct.filter((e, i) => i != index) : item.quantity--"></v-btn>
                                                </v-col>
                                                <v-col cols="auto py-0 d-flex align-center text-h6">
                                                    <v-row>
                                                        <v-col v-if="isCartInputIcon" cols="auto">
                                                            {{ item.quantity }}
                                                        </v-col>
                                                        <v-col v-else cols="auto">
                                                            <v-text-field v-model="item.quantity"
                                                                @keypress="isNumber($event)"
                                                                @blur="blurModelValueInput($event, index, item.stockCount)"
                                                                bg-color="transparent" color="teal-darken-1"
                                                                hide-details></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>
                                                <v-col cols="auto pa-0">
                                                    <v-btn icon="mdi-plus" class="text-teal-darken-1"
                                                        :readonly="item.quantity == item.stockCount" :elevation="0"
                                                        color="transparent" @click="item.quantity++"></v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12 text-caption text-grey">
                                            <v-row justify="center" >
                                                <v-col cols="auto">
                                                    {{ `Maksimum Sipariş Miktarı:
                                                        ` }}
                                                </v-col>
                                                <v-col cols="auto px-0 text-decoration-underline text-black">
                                                    {{ `
                                                        ${item.stockCount} Adet` }}
                                                </v-col>
                                            </v-row>
                                            </v-col>
                                    </v-row>
                                </v-col>
                                <v-col v-else>
                                    <v-row>
                                        <v-col cols="6 text-h6 py-0">
                                            - </v-col>
                                        <v-spacer />
                                        <v-col cols="5 text-h6 py-0 d-flex justify-center ">
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
const { selectedProduct, isCartInputIcon } = storeToRefs(productStore);
const { } = productStore;

const blurModelValueInput = ($event: { target: { value: string } }, _selectedProductIndex: number, maxQuantity: number) => {
    const value = $event.target.value
    if (maxQuantity < Number(value) && value) {
        selectedProduct.value = selectedProduct.value.map((e, i) => {
            if (_selectedProductIndex === i) e.quantity = e.stockCount
            return e
        })
    }
}

const isNumber = (evt: KeyboardEvent, isDot = false, isComma = false) => {
    const event = evt ? evt : (window.event as KeyboardEvent)
    const charCode = event?.which ? event.which : event?.keyCode
    if (charCode && charCode > 31 && (charCode < 48 || charCode > 57) && (isDot ? charCode !== 46 : true) && (isComma ? charCode !== 44 : true)) {
        event?.preventDefault()
    } else {
        return true
    }
}
</script>