import { CSSProperties } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isVisible = ref<boolean>(true)
  const hoveredChar: CSSProperties = {
    fontWeight: 900,
  }
  const hoveredAdjecent: CSSProperties = {
    fontWeight: 400,
  }

  const src = ref([
    '',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc1.jpg',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc2.jpg',
    '',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc3.jpg',
    'https://mpozygvxihgkdfpsrocm.supabase.co/storage/v1/object/public/homepage/ltwc4.jpg',
  ])

  function setIsVisible(bool: boolean) {
    isVisible.value = bool
  }
  return { setIsVisible, isVisible, src }
})
