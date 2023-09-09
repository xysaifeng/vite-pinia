import { defineStore } from "pinia";
import { reactive, toRefs, computed } from 'vue'

export const useUserStore = defineStore(' ', () => {
  const persion = reactive({
    name: 'tom',
    age: 18
  })

  const doubleAge = computed(() => persion.age * 2)

  const changeAge = (payload) => {
    persion.age += payload
  }

  return {
    ...toRefs(persion),
    doubleAge,
    changeAge
  }
})