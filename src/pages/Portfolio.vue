<template>
  <q-page  class="flex flex-center" :style=" mobile? '  ' : ''" >
    <div class="full-width  flex flex-center " >
      <div class="row justify-start full-width  ">
        <div class="  col-xs-12 col-sm-4 col-xs-6 col-md-4"
          v-for="a in projects" :key="a.title" >
            <q-card
                flat          
                @click="goToProjectPage(a)"
                class="reveal fade-bottom cursor-pointer projectCard bg-dark-bold q-ma-sm"
                v-ripple  >
                <q-card-section>
                  <div class="row justify-end">
                    <q-btn flat dark icon="open_in_new" @click.stop="goToProjectPage(a)"/>
                  </div>
                </q-card-section>
                <q-card-section class="q-ma-sm">
                  <div class="row title">
                    {{ a.title }}
                  </div>
                  <div class="max4Lines text-white" v-html="a.description">
                  </div>  
                </q-card-section>
                <q-card-section  >
                  <q-badge outlined  color="dark" text-color="white" :label="'Status: ' + a.status" class="q-mx-xs" />
                  <div class="" v-for="(tag,index) in a.tags" :key="index" >
                    <q-badge v-if="tag" outlined color="dark" :label="tag" class="q-mx-xs" />
                  </div>
                </q-card-section>
              </q-card> 
          
          </div>
        
      </div>
      <q-dialog :maximized="mobile" class="bg-dark "  v-model="showProject"  position="bottom" v-if="projectToShow">
        <div class="bg-dark">

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
  data () {
    return {
      slide: 0,
      projectToShow: {},
      showProject: false,
      hover: {}
    }
  },
  computed: {

    showCard(project) {
      const id = 'project:' + project.id
      const element = document.getElementById(id)
      const offset = element?.offsetTop + 3
      const duration = 900
      if (offset < 100) {
        return true
      }
      return false
    },

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
    goToProjectPage (project) {
      this.$q.loading.show()
      this.$router.push({path: `portfolio/${project.id}` })
        .finally(() => {
          this.$q.loading.hide()
        })
    },
  },
  async mounted () {
    if (!this.projects) {
      this.$q.loading.show()
    }
    await this.$store.dispatch('articles/getArticles')
    this.$q.loading.hide()

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
