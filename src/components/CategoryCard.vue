<template>
    <v-card width="100%"
        class="rounded-0 border-b-sm border-t-0 border-s-0 border-e-0 border-opacity-100 border-success d-flex align-center"
        min-height="100" color="teal-darken-1">
        <v-card-text>
            <v-row class="d-flex justify-center">
                <v-col cols="10">
                    <v-item-group multiple>
                            <v-row justify="center">
                                <v-col v-for="(n,i) in itemGroupList" :key="i" cols="auto py-1">
                                    <v-item v-slot="{ isSelected, toggle }">
                                        <v-col :class="`text-body-2 d-flex align-center font-weight-light ${isSelected ? 'rounded-xl border-white border-double bg-white text-teal-darken-1 border-sm' : 'text-decoration-underline'}`" @click="toggle">
                                            <v-scroll-y-transition>
                                                {{ n.title }}
                                            </v-scroll-y-transition>
                                            <v-icon class="ml-4" v-if="isSelected" color="teal-darken-1" >mdi-close</v-icon>
                                        </v-col>
                                    </v-item>
                                </v-col>
                            </v-row>
                    </v-item-group>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
    <v-sheet width="100%" height="20" color="teal-lighten-2" ></v-sheet>
</template>
<script lang="ts" setup>
const itemGroupList = [
    {
        title: "Elektrik",
    },
    {
        title: "Süpermarket",
    },
    {
        title: "Kişisel Bakım ve Kozmetik",
    },
    {
        title: "Kitap, Kırtasiye, Oyuncak",
    },
    {
        title: "Moda",
    },
    {
        title: "Anne Bebek",
    },
    {
        title: "Oyun, Konsol",
    },
    {
        title: "En Çok Satanlar",
    },
    {
        title: "Cep Telefonu ve Aksesuarları",
    },
]
</script>