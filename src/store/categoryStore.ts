import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useProductStore } from "./productStore";

export const useCategoryStore = defineStore("categoryStore", () => {
  const itemModelValue = ref([] as number[]);

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

  const categoryNameListForFilter = computed(() =>
    itemGroupList.value
      ?.filter(
        (e, i) =>
          itemModelValue.value.length && itemModelValue.value.includes(i)
      )
      ?.map((e) => e.title) ?? []
  );

  watch(itemModelValue, async () => {
    const productStore = await useProductStore();
    const { filterProduct } = productStore;
    filterProduct()
  });

  return { itemGroupList, itemModelValue, categoryNameListForFilter };
});
