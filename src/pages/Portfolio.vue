<template>
  <q-page  class="flex flex-center" :style=" mobile? '  ' : 'padding-left: 130px'" >
    <div class="full-width  flex flex-center " :style=" $q.screen.xl? 'height: 100vh' : ''">
      <div class="row justify-start full-width  ">
        <q-card
          flat
          @click="handleShowProject(a)"
          v-ripple class="col-xs-6 col-sm-4  col-xs-6 col-md-2 col-xl-2"
          v-for="a in projects" :key="a.title"  :style="getCardStyle(a)"  >
          <div v-if="!mobile && !hover[a.id] && !showProject" class="absolute bg-primary full-width full-height" style="opacity: 0.8; z-index: 2"></div>
          <q-img  class="full-height" fit="fill" :src="a.cover" >

            <div class="absolute-bottom-right bg-transparent" v-if="a.geome7ric">
              <img src="../assets/geome7ric_logo.svg" width="55px"  />
            </div>
          </q-img>
          <q-tooltip
            v-model="hover[a.id]"
            anchor="center middle"
            self="center middle"
            class="bg-secondary cursor-pointer	"
          >
            <div class="cursor-pointer " style="cursor: pointer">
              <div class="bg-primary text-white shadow-2 flex flex-center cursor-pointer	"
                style="border-radius: 50%; height: 90px; width: 90px" >
                <div class="cursor-pointer	">
                  <div class="text-center cursor-pointer" style="margin-top:px; font-size: 14px">
                      View <br> project
                  </div>
                </div>
              </div>
            </div>
          </q-tooltip>


        </q-card>
      </div>
      <q-dialog  :maximized="mobile" class="bg-dark "  v-model="showProject"  position="bottom">
        <div class="bg-dark" style="width: 100vh">

          <div class="row justify-start " >
              <q-btn color="white" flat icon="close" class="flex flex-center q-ma-md" @click="showProject =! showProject"/>
          </div>
          <q-carousel
            @click.stop=""
            swipeable
            control-color="white"
            v-model="slide"
            arrows
            class="full-width bg-dark"
            infinite
          >
            <q-carousel-slide
              class=" "
              v-for="(image,index) in projectToShow.images"
              :key="index"
              :name="index"
              :img-src="image"
              />

          </q-carousel>
          <q-video v-if="projectToShow.video"  :ratio="16/9" :src="projectToShow.video"/>
          <div class="q-ma-md text-white">
            <div class="row ">
              <div class="text-caption "
                style="margin-top:-10px">{{ projectToShow.date }}</div>
            </div>
            <div class="text-h6 q-my-sm">
              {{projectToShow.title}}
            </div>
            <div class="" v-html="projectToShow.description">
              <!-- {{descripcion}} -->
            </div>
          </div>
          <div class="col-md-12 col-xs-12 col-md q-my-sm" >
            <div class="q-mx-md text-white" v-html="projectToShow.content">
            </div>
          </div>
          <div
            v-for=" document in projectToShow.documents"
            :key="document.id"
            class="q-ma-md">
            <q-btn
              no-caps
              color="white"
              text-color="primary" :label="document.name" @click="open(document.url)" />
          </div>
          <div class="">
            <q-card-section class="row">
              <div  v-for="(media,index) in projectToShow.media" :key="index">
                <q-btn
                no-caps
                color="white"
                text-color="primary" :label="media.title" @click="open(media.src)" />
              </div>
            </q-card-section>
          </div>
          <div class="">
            <q-card-actions class="q-ml-md " style="">
              <q-badge outlined  color="white" text-color="dark" :label="'Status: ' + projectToShow.status" class="q-mx-xs" />
              <div class="" v-for="(tag,index) in projectToShow.tags" :key="index" >
                <q-badge outlined color="white" :label="tag" class="q-mx-xs" />
              </div>
            </q-card-actions>
          </div>
        </div>

      </q-dialog>
    </div>

  </q-page>
</template>

<script>

import { openURL } from 'quasar'

export default {
  // name: 'PageName',
  data () {
    return {
      slide: 0,
      projectToShow: {},
      showProject: false,
      hover: {}
    }
  },
  computed: {

    projects: {
      get() {
        return this.$store.state.articles.articles
      }
    },

    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },

    getNumberOfColumns() {
      let ret = 'col-2'
      if (this.$q.screen.xs) {
        ret = 'col-6'
      }
      return ret
    }
  },
  methods: {

    open(url){
      openURL(url)
    },
    handleShowProject(project) {
      this.hover = {}
      this.projectToShow = project
      this.showProject = true
    },
    getCardStyle(project) {
      let toret = 'height:33.33333vh; border-radius: 0px;'
      return toret
    },
  },
  async mounted () {
    await this.$store.dispatch('articles/getArticles')

  }
}
</script>

<style scoped>
.q-carousel__slide{
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

}
</style>
