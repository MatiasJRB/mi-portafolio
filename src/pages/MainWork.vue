<template>
  <q-page  class="flex flex-center" :style=" mobile? '  ' : ''" >
    <div class=" full-width  flex flex-center " v-if="!mobile">
      <div class="reveal fade-bottom  row justify-center full-width  q-my-xl"
        v-for="(project,index) in mainProjects" :key="project.title">


        <div v-if="index % 2===0" class="absolute" style=" z-index: 2;width: 50%; margin-left:400px; margin-top: 100px">
          <div class="shadow-2 row justify-end bg-dark-bold max4lines" style="min-height: 100px; " >
            <div class="q-ma-xl flex flex-center" v-html="project.description" >
                {{ index }}
            </div>
          </div>
          <div class="row justify-end q-mt-sm">
            <q-btn flat dark icon="open_in_new" @click="goToProjectPage(project)"/>
          </div>
        </div>

        <div v-else class="absolute " style=" z-index: 2;width: 40%;margin-left:-540px;  margin-top:100px">
          <div class="shadow-2 row justify-end bg-dark-bold max4lines" style="min-height: 100px; " >
            <div class="q-ma-xl flex flex-center" v-html="project.description" >
                {{index}}
            </div>
          </div>
          <div class="row justify-start q-mt-sm">
            <q-btn flat dark icon="open_in_new"/>
          </div>
        </div>
        
        <div v-if="index % 2===0" class="col-xs-6 col-sm-4 col-xs-6 col-md-6 ">
          <q-img   
            @click="goToProjectPage(project)"
            style="z-index: 1"
            height="300px" class="cursor-pointer full-width " 
            v-if="project.image" 
            :src="project.image">
            <div class="imageOverlay"/>
          </q-img>
        </div>

        <div v-else class="col-xs-6 col-sm-4 col-xs-6 col-md-6" >
          <div class=" text-accent q-mt-md"  style="margin-left: 90px">
            Featured project
          </div>
          <div class="row justify-start  title cursor-pointer" style="margin-left: 90px; z-index: 4">
            <div class="col-9">
            {{ project.title }}
            </div>
          </div>
        </div>

        <div v-if="index % 2===0"   class="col-xs-6 col-sm-4 col-xs-6 col-md-4 ">
          <div class="row justify-end text-accent q-mt-md">
            Featured project
          </div>
          <div class="row justify-end  title cursor-pointer" style="margin-left: 90px;">
            {{ project.title }}
          </div>          
        </div>
        <div v-else class="col-xs-6 col-sm-4 col-xs-6 col-md-6 ">
          <q-img 
            @click="goToProjectPage(project)"
            height="300px" class="cursor-pointer " v-if="project.image" :src="project.image"
            style="margin-left:-80px;">
            <div class="imageOverlay"></div>
           </q-img>
        </div>
        
      </div>
    </div>
    <div v-else>
      <div class="   row full-width" v-for="(project) in mainProjects" :key="project.title">
        <div class="col-12">
          <q-card
              class="mobileMainProject q-ma-md shadow-2"
            >
              <q-card-section class="q-mx-sm">
                <div class=" text-accent q-mt-md"  >
                  Featured project
                </div>
                <div class="row justify-start  title cursor-pointer text-accent"  style="filter: blur(0px)">
                  {{ project.title }}
                </div>   
              </q-card-section>
              <q-card-section class="">
                <div class="q-mx-sm " v-html="project.description" />
              </q-card-section>
              <q-card-section>
                <div class="row justify-start ">
                  <q-btn flat dark icon="open_in_new" @click="goToProjectPage(project)"/>
                </div>
              </q-card-section>
            </q-card>
          
        </div>
        
      </div>
    </div>

  </q-page>
</template>

<script>

export default {
  // name: 'MainWork',
  methods: {
    goToProjectPage (project) {
      this.$q.loading.show()
      this.$router.push({path: `portfolio/${project.id}` })
        .finally(() => {
          this.$q.loading.hide()
        })
    },
    getCardStyle(project) {
      let toret = 'height:300px;'
      toret = `  position: absolute;z-index: 2; border-radius: 4px; `
      toret+= 'background-image: url("'+ project.images[0] + '");background-size: 100%;background-size: cover;background-position: center;' 
      return toret
    },
  },
  computed: {
    mainProjects: {
      get() {
        let articles = this.$store.state.articles.featuredArticles
        return articles
      }
    },
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
  },
  async mounted () {
    await this.$store.dispatch('articles/getFeaturedArticles')
  },
  data () {
    return { 
    }
  }
}
</script>
