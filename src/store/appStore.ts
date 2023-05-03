import { CSSProperties } from 'vue'
import allData from '../data'

export const useAppStore = defineStore('app', () => {
  const isVisible = ref<boolean>(true)
  const NavBar = ref<HTMLElement>()

  const siteData = ref(allData)

  const src = ref([
    '',
    'https://live.staticflickr.com/65535/52865220011_d2250f53b4_n.jpg',
    'https://live.staticflickr.com/65535/52865651070_ea875b1d26_n.jpg',
    '',
    'https://live.staticflickr.com/65535/52865720758_3cdd23c1ac_n.jpg',
    'https://live.staticflickr.com/65535/52865429844_eed813830b_n.jpg',
  ])

  const setNavRef = (nav: HTMLElement) => {
    NavBar.value = nav
  }

  const navBarHeight = computed(() => {
    return NavBar.value?.offsetHeight
  })

  const navPadding = computed<CSSProperties>(() => {
    return {
      paddingTop: `${navBarHeight.value}px`,
    }
  })

  function setIsVisible(bool: boolean) {
    isVisible.value = bool
  }
  return {
    setIsVisible,
    isVisible,
    src,
    setNavRef,
    navBarHeight,
    navPadding,
    siteData,
  }
})
