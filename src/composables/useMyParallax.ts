export default function useMyParallax(target: HTMLElement) {
  const classer = ref<{}>()
  const { tilt, roll, source } = useParallax(target)
  // const { tilt, roll, source } = useParallax(quote_ref)
  const isHovered = useElementHover(target)

  const cardParallax = computed(() => ({
    transform: `rotateX(${roll.value * 20}deg) rotateY(${tilt.value * 20}deg)`,
  }))

  watchEffect(() => {
    if (isHovered.value) {
      classer.value = cardParallax.value
    } else {
      classer.value = {
        transition: '.3s ease-out all',
        transform: `rotateX(${0 * 20}deg) rotateY(${0 * 20}deg)`,
      }
    }
  })

  return { classer }
}
