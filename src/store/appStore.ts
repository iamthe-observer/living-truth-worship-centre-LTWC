import { CSSProperties } from 'vue'
import allData from '../data'

export const useAppStore = defineStore('app', () => {
  const isVisible = ref<boolean>(true)
  const NavBar = ref<HTMLElement>()

  const siteData = ref(allData)

  const src = ref([
    '',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc1.jpg',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc2.jpg',
    '',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc3.jpg',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc4.jpg',
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
