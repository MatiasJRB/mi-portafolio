<template>
  <q-page  class="flex flex-center bg-info" :style="( $q.screen.lg || $q.screen.xl )? 'padding-left: 130px' : ''">
    <!-- Vista principal -->
    <div class="full-width " :style=" $q.screen.lg || $q.screen.xl? 'height: 100%' : ''">
      <div class="row justify-start ">
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  "  >
          
          <div class="q-mx-md">
            <div :class="getAboutName" style="margin-top:30%" >
              About me
            </div>
            <div :class="getTextClass" style="line:height: 130%" >
              I'm a computer engineer graduated at Universidad Nacional del Sur, and now I'm working full time. <br>
              Currently, I'm leadering a small but powerfull team focused on an hybrid mobile application, avaiable in Play Store and Apple Store.<br>
              I'm co-founder and active part of Geome7ric, a software entrepreneurship started at 2020.<br>
               I usually accept different kinds of freelance jobs that force me to learn new tools in a self-thaugth way.
               I'am passionate about training and sports in general, creating and editing photos and videos and certain e-sports.<br>
                 
            </div>
            <span @click="$router.push('/contact')" style="font-size: 18px" class="text-secondary cursor-pointer " clickable>
              Let's make some special
            </span>
          </div>
        </div>
        <div class="col-6  full-height" v-if="$q.screen.lg || $q.screen.xl" >
          
          <div class="row  justify-end" >                     
            <q-img class="absolute-bottom-right" width="520px" style="margin-right: 5%"  src="../assets/portfolio.png"></q-img>
          </div>
        </div>        
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  mounted () {
    
    console.log(this.$route)
  },
  computed: {
    getAboutName() {
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
