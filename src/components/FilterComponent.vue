<template>
    <v-col class="py-0">
        <v-expansion-panels :elevation="0" v-model="expandedSecondVModel">
            <v-expansion-panel class="elevation-0" :class="`border-success border-opacity-100 ${expandedSecondVModel == 0 ? 'border-sm ' : 'border-b-sm'
                }`">
                <v-expansion-panel-title
                    class="text-uppercase ext-body-2 text-teal-darken-1 font-weight-medium d-flex justify-center"
                    expand-icon="mdi-chevron-down" collapse-icon="mdi-chevron-up">Fİltre</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-row>
                        <v-col cols="12 px-6" class="my-3 overflow-y-auto overflow-x-hidden" style="max-height: 600px;">
                            <v-row class="flex-column mt-6">
                                        <v-col class="pa-0" >
                                            <v-text-field label="Ürün Adı" v-model="productNameValue"
                                                bg-color="transparent" color="teal-darken-1"></v-text-field>
                                        </v-col>
                                        <v-col class="px-0" >
                                            <v-text-field label="Marka Adı" v-model="brandNameValue"
                                                bg-color="transparent" color="teal-darken-1"></v-text-field>
                                        </v-col>
                            </v-row>
                            <v-row class="flex-column border-sm border-black border-opacity-50 rounded-lg">
                                <v-col class="text-caption text-uppercase text-decoration-underline font-weight-bold">
                                    Fİyat
                                </v-col>
                                <v-col class="mt-4 px-6" v-if="isComponentShowToFilter">
                                    <v-range-slider v-model="rangeSliderValue" :max="maxPrice" :min="minPrice"
                                        thumb-label="always" @blur="()=>console.log('çalıştı')" ></v-range-slider>
                                </v-col>
                                <v-col v-else>
                                    <v-row class="flex-column">
                                        <v-col class="py-0" >
                                            <v-text-field label="Min  ( ₺ )" :model-value="rangeSliderValue[0] ?? ''"
                                                @update:model-value="($event) => rangeSliderValue[0] = $event ? Number($event) : $event"
                                                bg-color="transparent" color="teal-darken-1"
                                                @blur="blurRangeSliderValueMinValue($event)"
                                                @keypress="isNumber($event)"></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-text-field label="Max  ( ₺ )" :model-value="rangeSliderValue[1] ?? ''"
                                                @update:model-value="($event) => rangeSliderValue[1] = $event ? Number($event) : $event"
                                                bg-color="transparent" color="teal-darken-1"
                                                @blur="blurRangeSliderValueMaxValue($event)"
                                                @keypress="isNumber($event)"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row class="flex-column mt-6 border-sm border-black border-opacity-50 rounded-lg">
                                <v-col class="text-caption text-uppercase text-decoration-underline font-weight-bold pb-0">
                                    Değerlendİrme
                                </v-col>
                                <v-col class="mt-4" v-if="isComponentShowToFilter">
                                    <v-rating :model-value="rateValue" @update:model-value="($event)=> {
                                      rateValue = $event
                                      filterProduct()
                                    }" hover
                                        color="black-lighten-1" half-increments active-color="teal-darken-1" ></v-rating>
                                </v-col>
                                <v-col v-else>
                                    <v-row class="flex-column">
                                        <v-col>
                                            <v-text-field :model-value="rateValue ?? ''"
                                                @update:model-value="($event) => rateValue = $event ? Number($event) : $event"
                                                bg-color="transparent" color="teal-darken-1"
                                                @blur="blurRateValueValue($event)"
                                                @keypress="isNumber($event,true,false)" messages="0 ve 5 dahil olmak üzere oran giriniz" placeholder="-" ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col class="d-flex justify-end align-center">
                            <v-btn @click="resetFilter()" icon="mdi-close" class="mx-2 text-body-2 font-weight-bold text-red-darken-1 elevation-1">
                                
                            </v-btn>
                            <v-btn @click="isComponentShowToFilter = !isComponentShowToFilter" icon="mdi-swap-horizontal-bold" class="mx-2 text-body-2 font-weight-bold text-orange-darken-1 elevation-1">
                                
                            </v-btn>
                            <v-btn class="text-body-2 font-weight-bold text-success elevation-1 d-flex align-center" @click="filterProduct">
                                Kaydet
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-col>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/store/productStore";

const expandedSecondVModel = ref(0);
const productStore = useProductStore();
const { rangeSliderValue, maxPrice, rateValue, minPrice, isComponentShowToFilter, productNameValue, brandNameValue } = storeToRefs(productStore);
const { filterProduct, resetFilter } = productStore;

onMounted(() => {
    rangeSliderValue.value = [minPrice.value, maxPrice.value]
})

const blurRangeSliderValueMinValue = async ($event: { target: { value: unknown } }) => {
    const input = $event.target.value
    if (!input || (input && (Number(input) > maxPrice.value || Number(input) < minPrice.value))) rangeSliderValue.value[0] = minPrice.value
    filterProduct()
}
const blurRangeSliderValueMaxValue = async ($event: { target: { value: unknown } }) => {
    const input = $event.target.value
    if (!input || (input && (Number(input) > maxPrice.value || Number(input) < minPrice.value))) rangeSliderValue.value[1] = maxPrice.value
    filterProduct()
}
const blurRateValueValue = async ($event: { target: { value: unknown } }) => {
    const input = $event.target.value
    if (!input || (input && (Number(input) > 5 || Number(input) < 0))) rateValue.value = ''
    filterProduct()
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