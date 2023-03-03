export const useAppStore = defineStore('app', () => {
  const isVisible = ref<boolean>(true)

  function setIsVisible(bool: boolean) {
    isVisible.value = bool
  }
  return { setIsVisible, isVisible }
})
