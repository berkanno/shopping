import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCategoryStore = defineStore("categoryStore", ()=> {
    
    const itemModelValue = ref([] as number[])

    const itemGroupList = ref([
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
      ]);

    const categoryNameListForFilter = computed(()=> itemGroupList.value.filter((e, i) => (itemModelValue.value.length && itemModelValue.value.includes(i)) || (!itemModelValue.value.length)).map( e => e.title)) 

    return { itemGroupList
        , itemModelValue, categoryNameListForFilter
     }
})