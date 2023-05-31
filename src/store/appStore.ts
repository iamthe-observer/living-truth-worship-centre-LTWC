import { CSSProperties } from 'vue'
import allData from '../data'

export const useAppStore = defineStore('app', () => {
  const isVisible = ref<boolean>(true)
  const NavBar = ref<HTMLElement>()

  const siteData = ref(allData)

  const src = ref([
    '',
    'https://live.staticflickr.com/65535/52865127731_d142129254_o.jpg',
    'https://live.staticflickr.com/65535/52919976509_9c6b9030af_o.jpg',
    '',
    'https://live.staticflickr.com/65535/52865118066_dab47be796_o.jpg',
    'https://live.staticflickr.com/65535/52865429844_eed813830b_n.jpg',
  ])

  const sm_src = ref([
    '',
    'https://live.staticflickr.com/65535/52865127731_d142129254_o.jpg',
    'https://live.staticflickr.com/65535/52919976509_9c6b9030af_o.jpg',
    '',
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
    sm_src,
    setNavRef,
    navBarHeight,
    navPadding,
    siteData,
  }
})
