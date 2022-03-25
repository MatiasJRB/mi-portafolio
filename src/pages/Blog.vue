<template>
  <q-page  class="flex flex-center bg-dark text-gray-4" :style=" $q.screen.xl? 'padding-left: 130px' : 'padding-left: 130px'">
    <!-- Vista principal -->
    <!-- <div class="" :style=" $q.screen.xl? '' : ''">
      <div >
          <div class="row justify-start">
            <div class="col-2 " v-for="a,index in projects" :key="index" >
              <q-card class="q-ma-sm cursor-pointer bg-dark " @click="handleBlogClick(a)" style="min-height: 240px" >
                <q-separator :color="getSeparatorColor(index)" style="height: 2px"/>
                <div class="q-pa-md" >
                  <div :class="'text-'+getSeparatorColor(index)">
                    PHOTO
                  </div>
                  <div class="text-h6 text-positive">
                    {{ a.title }}
                  </div>
                  <div class="row justify-center">
                    <q-img fit="fill" :src="a.images[0]"  height="100px"/>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        
        
      </div>
      
    </div> -->
    <Carousel />
  </q-page>
</template>

<script>
// Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper';

export default {
  // name: 'PageName',
  components: {
  },
  data () {
    return {
      projects: []
    }
  },
  async mounted () {
    this.projects = await this.$store.dispatch('projects/getProjects')      
  },
  methods: {
    handleBlogClick(blog) {
      window.open('https://www.youtube.com/watch?v=72E3Kg4bxoA')
    },
    getSeparatorColor (index) {
      if (index % 4 === 0) {
        return 'accent'
      }
      if (index % 3 === 0) {
        return 'primary'
      }
      if (index % 2 === 0) {
        return 'secondary'
      }
      return 'positive'
    }
  },
  computed: {
    getSkillsName() {
      let ret = 'text-weight-bold  '
      if (this.$q.screen.xl) {
        ret = ret + ' text-h1'
      } else {
        ret = ret + ' text-h2'
      }
      return ret
    },
    getTextClass() {
      let ret = 'text-subtitle1 q-mt-md'
      if (this.$q.screen.xl) {
        ret = ret + ' '
      } else {
        ret = ret + ' '
      }
      return ret
    }
  }
}
</script>
