<template>
  <q-page class="flex flex-center " :style="( !mobile )? 'padding-left: 130px' : ''">
    <div class="full-width " :style=" !mobile? '' : 'height: 100%'">
      <div class="row justify-start ">
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  " :style="mobile? 'height: 70%; margin-top:30%' :''"  >
          
          <div class="q-mx-xl q-mt-lg 	" :style="!mobile ? 'margin-top: 30%': ''" > 
            <div :class="getAboutName" style="" >
              About me
            </div>
            <div :class="getTextClass" style="line:height: 130%; tab-size: 2;" >
                I'm a computer engineer graduated at Universidad Nacional del Sur, and currently I'm working full time. <br>
               I'm leadering a small but powerfull team focused on an hybrid mobile application, avaiable in Play Store and Apple Store.<br>
              I'm co-founder and active part of Geome7ric, a software entrepreneurship started at 2020.<br>
               I usually accept different kinds of freelance jobs so learn new tools o  in a self-thaugth way.
               I'am passionate about training and sports in general, creating and editing photos and videos and certain e-sports.<br>
                 
            </div>
            <span @click="$router.push('/contact')" style="font-size: 18px" class="text-secondary cursor-pointer " clickable>
              Let's make some special
            </span>
          </div>
        </div>
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  ">
          
          <div class="row justify-center " style=" ">  
            <div class="q-mt-md  " style="z-index: 2000; margin-bottom: -50px; margin-top">
              <div class="row justify-center full-width ">
                <div class="  q-pa-xs  ">
                  <div class="text-center row justify-center">
                    History
                  </div>
                  <div class="row justify-center flex flex-center">
                    <div class=" text-overline ">
                        Principal
                    </div>
                    <div class="">
                      <q-toggle
                          v-model="longVersion"
                          checked-icon="check"
                          color="accent"
                          unchecked-icon=""
                        />
                    </div>
                    <div class=" text-overline">
                      Detailed
                    </div>
                  </div>
                </div>
              </div>
              
            </div>              
            <q-scroll-area
              dark
              style="height: 100vh; "
              class="full-width full-heigth"
            >
              <div class="row justify-around q-ma-xl">

                <div class="row justify-around q-ma-lg" style=" ">
                  <q-timeline layout="dense" >

                    <q-timeline-entry
                      v-show="longVersion"
                      title="I certified as a build and reparation of PC technique"
                      subtitle="November 20th, 2013"
                      side="right"                      
                      icon="school"
                    >
                      <div>
                        By the Escuela Argentina de Idiomas y Tecnología
                      </div>
                    </q-timeline-entry>

                    

                    <q-timeline-entry
                      title="I sell out my first software called 'Geome7ric 1.0'"
                      subtitle="June 12th, 2018"
                      side="left"                      
                      icon="sell"
                    >
                      <div>
                        I made a solution to stock, selling and client management for a neighborhood fodder. An event that marked my start in the freelance world
                      </div>
                    </q-timeline-entry>


                    <q-timeline-entry
                      v-if="longVersion"
                      title="Starts my intership in Profertil S.A. "
                      subtitle="October 1th, 2020"
                      side="right"
                      icon="work"
                    >
                      <div>
                        A interships is needed to finish my career. I performed as a network and Windows systems administrator, supporting ASPEN products and some developments in C++
                      </div>
                    </q-timeline-entry>

                    

                    <q-timeline-entry
                      title="I graduate from Computer Engineering"
                      subtitle="April 9th, 2021"
                      icon="school"
                      side="left"
                    >
                      <div class="">
                        I present my final project in front of friends and family, to put an end to my engineering carer
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      v-if="longVersion"
                      title="I starts bringing services with exclusive dedication to Profertil S.A."
                      subtitle="April 12th, 2021"
                      icon="work"
                      side="right"
                    >
                      <div>
                        Still performing as a network and Windows systems administrator, supporting ASPEN products and some developments in C++, but full time
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="Geome7ric sold his first product"
                      subtitle="March 20th, 2021"
                      side="right"                      
                      icon="grade"
                    >
                      <div>
                        Geome7ric Ant was delivered to the customer!
                      </div>
                    </q-timeline-entry>

                    <q-timeline-entry
                      title="My first job as developer <3"
                      subtitle="June 7th to now, 2021"
                      side="left"                      
                      color="accent"
                      icon="work"
                    >
                      <div>
                        I starts as Fullstack Developer in Nuqlea, the evolution of CAPP, 'la plataforma líder en construcción.' (the lider platform in construction).
                      </div>
                    </q-timeline-entry>

                  </q-timeline>
                  <div class="text-caption">
                    I trust that with smart work and time, there will be many more entries in this timeline :)
                  </div>
                </div>
              </div>
            </q-scroll-area>
          </div>
        </div>        
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      longVersion: false
    }
  },
  mounted () {
    
    console.log(this.$route)
  },
  computed: {
    getImageWidth () {
      let ret = '665px'
      ret = (this.$q.screen.height *80) / 100
      ret = ret.toString() + 'px'
      console.log(this.$q.screen)
      return ret
    },
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
    getAboutName() {
      let ret = 'text-weight-bold   '
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
