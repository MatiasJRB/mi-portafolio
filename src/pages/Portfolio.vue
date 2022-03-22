<template>
  <q-page  class="flex flex-center" :style=" $q.screen.xl? 'padding-left: 130px' : 'padding-left: 130px'" >
    <div class="full-width  flex flex-center " :style=" $q.screen.xl? 'height: 100vh' : ''">
      <div class="row justify-start full-width  ">
        <q-card  
          flat           
          @click="handleShowProject(a)"
          v-ripple :class="getNumberOfColumns" v-for="a in projects" :key="a.title"  :style="getCardStyle(a)"  >
          <div v-if="!hover[a.images[0]] && !showProject" class="absolute bg-primary full-width full-height" style="opacity: 0.5; z-index: 10000"></div>
          <q-img class="full-height" fit="fill" :src="a.images[0]" >
            <div class="absolute-bottom-right bg-transparent" v-if="a.geome7ric" x>
              <img src="../assets/geome7ric_logo.svg" width="55px"  />
            </div>
          </q-img>          
          <q-tooltip
            v-if="!showProject"
            v-model="hover[a.images[0]]"
            anchor="center middle"
            self="center middle"
            class="bg-accent cursor-pointer	"
          >
            <div class="cursor-pointer " style="cursor: pointer">
              <div class="bg-accent shadow-2 flex flex-center cursor-pointer	" 
                style="border-radius: 50%; height: 90px; width: 90px" >
                <div class="cursor-pointer	">
                  <div class="text-dark text-center cursor-pointer" style="margin-top:px; font-size: 14px">
                      View <br> project
                  </div>
                </div>
              </div>
            </div>
          </q-tooltip>
          
        
        </q-card>
      </div> 
      <q-dialog  full-height class="bg-white"  v-model="showProject"  position="bottom">
        <div class="bg-white" style="width: 100vh">
          
          <!-- <div class="row justify-end" >
              <q-btn flat icon="close" class="flex flex-center" size="md" @click="showProject =! showProject"/>
          </div> -->
          <q-carousel
            @click.stop=""
            swipeable
            control-color="accent"
            v-model="slide"
            arrows 
            class="full-width"
            infinite            
          >
            <q-carousel-slide
              class="full-width"
              v-for="(image,index) in projectToShow.images"
              :key="index"
              :name="index"
              :img-src="image"
              />

          </q-carousel>
          <div class="q-ma-md">
            <div class="row ">
              <div class="text-caption "
                style="margin-top:-10px">{{ projectToShow.date }}</div>
            </div>
            <div class="text-h6 text-dark  q-my-sm">
              {{projectToShow.title}}
            </div>          
            <div class="" v-html="projectToShow.description">
              <!-- {{descripcion}} -->
            </div>     
          </div>
          <div class="col-md-12 col-xs-12 col-md q-my-sm" >
            <div class="q-mx-md " v-html="projectToShow.content">
              <!-- {{descripcion}} -->
            </div>
          </div>
          <div class="">
            <q-card-section class="row">
              <div  v-for="(media,index) in projectToShow.media" :key="index">
                <q-btn  color="" flat class="q-ml-sm bg-primary text-white" :label="media.title" @click="handleMedia(media)" />
              </div>
            </q-card-section>
          </div> 
          <div class="">
            <q-card-actions class="q-ml-md " style="">
              <q-badge outlined  color="dark" text-color="white" :label="'Status: ' + projectToShow.status" class="q-mx-xs" />
              <div class="" v-for="(tag,index) in projectToShow.tags" :key="index" >
                <q-badge outlined color="dark" :label="tag" class="q-mx-xs" />
              </div>
            </q-card-actions>
          </div>
        </div> 
       
      </q-dialog>     
    </div>
    
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      slide: 0,
      projectToShow: {},
      showProject: false,
      projects: [],
      hover: {}
    }
  },
  computed: {
    
    getNumberOfColumns() {
      let ret = 'col-2'
      if (this.$q.screen.xs) {
        ret = 'col-6'
      }
      return ret
    }
  },
  methods: {
    handleShowProject(project) {
      this.hover = {}
      this.projectToShow = project
      this.showProject = true
    },
    getCardStyle(project) {
      let toret = 'height:33.33333vh; border-radius: 0px;'
      if (this.hover[project.images[0]]) {
        // toret += 'filter: grayscale(0)'
      } else {
        // toret += 'filter:grayscale(0.6)'
      }
      return toret
    },
  },
  async mounted () {
    this.projects = await this.$store.dispatch('projects/getProjects')
      
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