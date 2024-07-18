<template>
    <v-col class="py-0">
        <v-expansion-panels :elevation="0" v-model="expandedSecondVModel">
            <v-expansion-panel class="elevation-0" :class="`border-success border-opacity-100 ${expandedSecondVModel == 0 ? 'border-sm ' : 'border-b-sm'
                }`">
                <v-expansion-panel-title
                    class="text-uppercase ext-body-2 text-teal-darken-1 font-weight-medium d-flex justify-center"
                    expand-icon="mdi-chevron-down" collapse-icon="mdi-chevron-up">Fİltre</v-expansion-panel-title>
                <v-expansion-panel-text>
                    <v-row class="flex-column">
                        <v-col class="my-3 pb-0" style="border-bottom: 1px solid green;">
                            <v-row class="flex-column">
                                <v-col class="text-caption text-uppercase text-decoration-underline font-weight-bold">
                                    <v-row>
                                        <v-col cols="auto">
                                            Fİyat
                                        </v-col>
                                        <v-col cols="auto">
                                            <v-icon @click="isRangeIconToPrice = !isRangeIconToPrice">
                                                {{ `${isRangeIconToPrice ? 'mdi-tune-variant' : 'mdi-import'}` }}
                                            </v-icon>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col class="mt-4" v-if="isRangeIconToPrice">
                                    <v-range-slider v-model="rangeSliderValue" :max="maxPrice" :min="minPrice"
                                        thumb-label="always"></v-range-slider>
                                </v-col>
                                <v-col v-else>
                                    <v-row class="flex-column">
                                        <v-col>
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
                        </v-col>
                        <v-col class="d-flex justify-end">
                            <v-btn class="text-body-2 font-weight-bold text-success elevation-0" @click="filterProduct">
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
const { rangeSliderValue, maxPrice, minPrice, isRangeIconToPrice } = storeToRefs(productStore);
const { filterProduct } = productStore;

onMounted(() => {
    rangeSliderValue.value.push(...[minPrice.value, maxPrice.value])
})

const blurRangeSliderValueMinValue = ($event: { target: { value: unknown } }) => {
    const input = $event.target.value
    if (!input || (input && (Number(input) > maxPrice.value || Number(input) < minPrice.value))) rangeSliderValue.value[0] = minPrice.value
}
const blurRangeSliderValueMaxValue = ($event: { target: { value: unknown } }) => {
    const input = $event.target.value
    if (!input || (input && (Number(input) > maxPrice.value || Number(input) < minPrice.value))) rangeSliderValue.value[1] = maxPrice.value
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