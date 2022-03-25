<template>
  <Carousel :autoplay="3000" :wrapAround="true" >
    <Slide v-for="(brandGroup, index) in brands" :key="index" >
     {{index}}
    </Slide>
  </Carousel>
</template>

<script>
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  name: 'CarouselBanners',
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      brands: [],
      aliados: [
        'ArcelorMittal',
        'Barbieri',
        'Casiraghi',
        'CCR',
        'CeramicaCanuelas',
        'CeramicaFanelli',
        'CeramicaRosario',
        'CeramicaQuilmes',
        'Ceresita',
        'Cunmalleu',
        'Durlock',
        'Ferrum',
        'Fischer',
        'FV',
        'idero',
        'Isover',
        'Later-Cer',
        'Megaflex',
        'murbano',
        'Norton',
        'Oblak',
        'Palmar',
        'Pam',
        'Peisa',
        'Placo',
        'Protex',
        'Rehau',
        'Retak',
        'Roca',
        'Rotoplas',
        'Saint-Gobain',
        'Schneider',
        'Sekurit',
        'Shap',
        'Tacurú',
        'TDLNew',
        'TekBond',
        'Tendenza',
        'Tuyango',
        'Vasser',
        'Weber'
      ],
      settings: {
        itemsToShow: 3,
        snapAlign: 'start'
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
      // 700px and up
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center'
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'start'
        }
      },
      itemsToShow: 2,
      loading: false,
      slidesTest: [
        {
          name: 'Cotiza tu baño',
          img: 'https://bitbucket.org/webcapp/capp-app-vue/src/cd1b1813a16070f244299b4a78cde0be98d6c235/src/assets/landing/banner.svg'
        },
        {
          name: 'Cotiza tu cocina',
          img: 'src/assets/landing/banner.svg'
        }
      ],
      slide: 'marcas'
    }
  },
  props: {
    // textBtn: {
    //   type: String
    // }
  },

  mounted () {
    const n = 12
    const i = 0
    const a = 0
    let brand
    // this.aliados = this.shuffle(this.aliados)
    console.log(this.aliados.length)
    this.aliados = this.aliados.sort()
    console.log(this.aliados)
    this.brands[0] = (this.aliados.slice(0, 12))
    this.brands[1] = (this.aliados.slice(12, 24))
    this.brands[2] = (this.aliados.slice(24, 36))
    console.log(this.brands)
    this.brands[3] = (this.aliados.slice(36, this.aliados.length))
  },

  computed: {

    // ...mapState('banners', [
    //   'brandsGroups'
    // ])
  },

  methods: {

    shuffle (array) {
      let currentIndex = array.length; let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
      }
      return array
    },

  }
}
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

</style>
