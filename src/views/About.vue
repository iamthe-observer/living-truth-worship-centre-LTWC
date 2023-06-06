<template>
  <main class="lg:pt-[59px] pt-5 flex flex-col bg-transparent z-50 isolate">
    <section class="relative min-h-[55vh] bg-base900 flex justify-evenly items-center p-10">
      <div class="flex-1 text-white flex flex-col gap-4 font-Monument z-10">
        <span class="text-4xl tracking-wide drop-shadow-lg">WHAT WE BELIEVE IN</span>
        <div class="max-w-[20%] w-full h-2 bg-prime"></div>
        <span class="text-xl tracking-wider drop-shadow-lg">GET TO KNOW US BETTER!</span>
      </div>

      <div
        class="absolute lg:relative inset-0 lg:inline grid place-items-center flex-1 w-full h-full lg:brightness-100 brightness-[35%]">
        <img class="" src="https://live.staticflickr.com/65535/52918725652_323217ede7_o.png" />
      </div>
    </section>

    <section class="min-h-screen lg:py-20 py-16 lg:px-20 px-4 flex flex-col gap-3 bg-base100 relative isolate">
      <h1 class="self-center bg-prime text-white p-4 font-Monument uppercase tracking-[.3em] mb-10">
        Our Mission
      </h1>

      <p class="lg:mx-20 mx-0 w-fit max-w-full lg:text-[3em] text-[2.1em] lg:text-left text-center font-Gloock relative">
      <div class="w-32 aspect-square absolute opacity-50 -top-10 lg:-left-16 -left-6 -rotate-[20deg] -z-1">
        <svg version="1.1" id="svg2" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" sodipodi:docname="quotes.svg"
          inkscape:version="0.48.4 r9939" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1200 1200" enable-background="new 0 0 1200 1200" xml:space="preserve" fill="#D94b0f">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path id="path17923" inkscape:connector-curvature="0"
              d="M518.474,105.344C305.831,120.286,0.168,154.236,0,570.687v523.97h474.504 v-560.61H316.946C306.965,384.354,430.23,345.701,564.274,316.03L518.474,105.344z M1154.198,105.344 c-212.643,14.942-518.306,48.893-518.473,465.343v523.97h474.505v-560.61H952.672C942.689,384.354,1065.956,345.701,1200,316.03 L1154.198,105.344L1154.198,105.344z">
            </path>
          </g>
        </svg>
      </div>

      Our purpose is to help people who are distant from God to discover new life through Jesus Christ.<br />
      <span class="lg:text-4xl text-2xl">That means:</span>
      </p>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div class="flex items-start" v-for="mission in missions">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="right-alt-circle" class="icon glyph w-10"
            fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M13,9.42,15.58,12,13,14.6V14a1,1,0,0,0-1-1H8V11h4a1,1,0,0,0,1-1ZM22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12Zm-5-1.42L14.42,8a2,2,0,0,0-2.19-.43A2,2,0,0,0,11,9H8a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h3a2,2,0,0,0,1.19,1.43,1.9,1.9,0,0,0,.77.16A2,2,0,0,0,14.42,16L17,13.42A2,2,0,0,0,17,10.58Z"
                style="fill: #000"></path>
            </g>
          </svg>
          <span class="ml-3 w-fit font-Outfit font-bold text-md">{{ mission }}</span>
        </div>
      </div>
    </section>

    <section
      class="text-white lg:max-h-screen max-h-full flex justify-between lg:py-32 py-20 lg:px-10 px-4 min-h-[1900px] gap-3 bg-base900 relative isolate">
      <div v-if="!if_sm" class="image_container flex-1">
        <img class="image1 w-[85%] mx-auto " src="https://live.staticflickr.com/65535/52865506040_6c24735dfb_o.jpg"
          alt="">
      </div>

      <div class="lg:w-3/5 w-full flex flex-col">
        <div class="flex flex-col gap-2 lg:gap-3 justify-between mb-10">
          <h1 class="font-Monument text-[2em]">
            Our <br />
            Beliefs
          </h1>
          <p class="text-md font-Unbound">
            Here at Living Truth Worship Centre, we hold these beliefs to be central to our faith and guiding principles.
          </p>
        </div>

        <div v-if="if_sm" class="w-full"><img src="https://live.staticflickr.com/65535/52865506040_6c24735dfb_o.jpg"
            alt="" class="object-cover" />
        </div>

        <div class="w-full h-full gap-16 grid grid-cols-1 lg:grid-cols-2 mt-10">
          <div class="border-t-8 border-prime flex flex-col gap-5 py-8" v-for="belief in beliefs">
            <h1 class="font-Monument text-2xl">{{ belief.title }}</h1>
            <p class="font-Unbound font-light">
              {{ belief.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-h-full py-20 flex flex-col gap-3 bg-base300 relative isolate">
      <h1 class="self-center bg-prime text-white p-4 font-Monument uppercase tracking-[.3em] mb-10">
        Our Values
      </h1>

      <div class="w-full h-full flex flex-col lg:gap-20 gap-12">
        <div class="flex-1 flex gap-10 pl-10 lg:pr-20 pr-10">
          <img v-if="!if_sm" src="https://live.staticflickr.com/65535/52919403376_4bb6abe58e_o.png" alt=""
            class="object-cover w-1/2 h-[400px]" />
          <img src="https://live.staticflickr.com/65535/52919863688_2e39f97c4d_o.png" alt=""
            class="object-cover w-full lg:w-1/2 lg:h-[400px] h-[250px]" />
        </div>

        <div class="grid lg:grid-cols-2 gid-cols-1 gap-5 flex-1 lg:px-20 px-4">
          <div v-for="values in ltwc_values" class="flex lg:gap-5 gap-0 h-full items-center bg-base100 p-4">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="right-alt-circle"
              class="icon glyph w-8 aspect-square" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M13,9.42,15.58,12,13,14.6V14a1,1,0,0,0-1-1H8V11h4a1,1,0,0,0,1-1ZM22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12Zm-5-1.42L14.42,8a2,2,0,0,0-2.19-.43A2,2,0,0,0,11,9H8a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2h3a2,2,0,0,0,1.19,1.43,1.9,1.9,0,0,0,.77.16A2,2,0,0,0,14.42,16L17,13.42A2,2,0,0,0,17,10.58Z"
                  style="fill: #000"></path>
              </g>
            </svg>
            <span class="ml-3 w-fit font-Outfit font-bold">{{ values }}</span>
          </div>
        </div>
      </div>
    </section>

    <section
      class="lg:spikes_container_about spikesSM_container_about min-h-[80vh] py-32  bg-transparent isolate relative flex items-center">

      <div
        class="flex flex-col items-center justify-center gap-6 h-full w-full relative my-auto lg:mx-0 mx-5 before:content-[''] before:w-24 before:h-2 before:absolute before:-top-16 before:bg-base100 before:left-10 after:content-[''] after:w-24 after:h-2 after:absolute after:-bottom-16 after:bg-base100 after:right-10">

        <Bubbletext text="EVERYTHING FOR THE GLORY OF JESUS CHRIST “WHO CAME FROM THE FATHER, FULL
        OF GRACE AND TRUTH" ID="12" default_clr="fff"
          class="text-center w-full lg:text-4xl text-2xl font-Unbound font-[200]" />

        <div
          class="isolate p-5 before:content-[''] after:content-[''] before:absolute before:top-0 before:left-0 before:w-1/3 before:h-1/3 before:bg-base100 after:absolute after:bottom-0 after:right-0 after:w-1/3 after:h-1/3 after:bg-base100 relative bg-prime shadow-lg w-fit mx-auto font-Monument tracking-[.2em] hover:before:w-1/2 hover:after:w-1/2 before:transition-all before:duration-150 before:ease-in-out after:transition-all after:duration-150 after:ease-in-out">
          <div class="-z-1 absolute inset-2 bg-base100"></div>
          <span class="text-prime">John 1:14</span>
        </div>


      </div>
    </section>

  </main>
  <Footer />
</template>

<script setup lang="ts">
import { useAppStore } from '../store/appStore'
import Loader from '../..'
import gsap from 'gsap';
// gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin)

const if_sm = inject<boolean>('small_screen')!

onMounted(() => {

  // @ts-ignore
  if (!if_sm.value) imageScroll()

  function imageScroll() {
    const container_height = document.querySelector('.image_container')!.clientHeight
    setTimeout(() => {
      gsap.to('.image1', {
        scrollTrigger: {
          trigger: ".image_container",
          start: "top 12%",
          end: () => `+=${container_height * 0.7}`,
          scrub: 3,
          pin: true,
        }
      })
    }, 500)
  }
})


function initAnimatedBg() {
  const app_container = document.querySelector('#app_container')
  const div = document.createElement('div')
  div.setAttribute('id', 'containerAbout')
  div.setAttribute(
    'class',
    'touch-none fixed inset-0 w-full overflow-hidden p-0 m-0'
  )
  app_container?.appendChild(div)

  return Loader('about')
}

const beliefs = ref([
  { title: "Bible's Truth", text: 'The Bible is the inspired word of God and is the ultimate authority for all matters of faith and practice.' },
  { title: "Jesus", text: 'Jesus Christ is the Son of God and the only way to salvation.' },
  { title: "Faith", text: "Salvation is a free gift of God's grace, received through faith in Jesus Christ." },
  { title: "Holy Spirit", text: 'The Holy Spirit empowers believers to live a godly life and is present to guide and direct them.' },
  { title: "Baptism", text: "Baptism by immersion is an important step of obedience for believers, signifying their identification with Christ's death, burial, and resurrection." },
  { title: "Communion", text: "Communion, or the Lord's Supper, is a symbolic remembrance of Christ's sacrifice for believers." },
  { title: 'Church as a Body', text: "The church is the body of Christ and is called to carry out His mission on earth." },
  { title: "His Return", text: "The return of Jesus Christ is certain and will be visible, personal, and triumphant." }
])

const ltwc_values = ref([
  'Community: LTWC values creating a sense of belonging and support for all members and attendees.',
  'Love: LTWC values expressing love towards each other and the world as a whole.',
  'Integrity: LTWC values upholding honesty, trustworthiness, and moral principles.',
  'Compassion: LTWC values showing kindness and empathy towards others.',
  'Diversity: LTWC values embracing differences in culture, beliefs, and backgrounds.',
  'Excellence: LTWC values striving for excellence in all aspects of church life and service.',
  'Authenticity: LTWC values being true to oneself and genuine in all interactions.',
  'Service: LTWC values serving others and making a positive impact in the community.',
  'Humility: LTWC values being humble and recognizing the value of others.',
  'Inclusivity: LTWC values welcoming and accepting all individuals, regardless of their differences.',
])

const missions = ref(['Glorify God: The church exists to give honor and praise to God in all that it does.', 'Nurture a community of believers: Living Truth Worship Centre provides a supportive and welcoming community where believers can grow in their faith through worship, fellowship, and discipleship.', 'Impact the local community: The church seeks to make a positive impact on its local community and beyond through outreach and evangelism efforts.', 'Teach the truth of the Gospel: Living Truth Worship Centre is committed to teaching the truth of the Gospel in a relevant and impactful way that helps individuals understand and apply it in their daily lives.'])

onMounted(() => {
  useAppStore().setIsVisible(false)
  useTitle('LTWC | About Us')

  initAnimatedBg()

  window.scrollTo({
    top: 0,
  })

  function removeAnimatedBg() {
    const app_container = document.querySelector('#app_container')
    app_container?.removeChild(document.querySelector('#containerAbout')!)
  }

  onBeforeUnmount(() => {
    removeAnimatedBg()
  })
})
</script>

<style scoped></style>
