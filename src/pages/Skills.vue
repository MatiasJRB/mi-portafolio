<template>
   <q-page  class="flex flex-center bg-info" :style="( $q.screen.lg || $q.screen.xl )? 'padding-left: 130px' : ''">
    <!-- Vista principal -->
    <div class="full-width " :style=" $q.screen.xl? 'height: 100%' : ''">
      <div class="row justify-start ">
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  "  >
          
          <div class="q-ml-xl">
            <div :class="getSkillsName" style="margin-top:30%" >
              Skills & experience
            </div>
            <div :class="getTextClass" style="line:height: 130%" >
              Since beginning my journey as a freelance developer nearly 3 years ago, I’ve done work for diferent kind of clients, alone and with talented people, 
              to create products for both business and consumer use. <br>
              With Geome7ric, we made engineer quality products for supply any kind of client requirement.<br>
              Personally, I can carry out big projects from architectual design to the deployment, going through settings ups, development and organizing workflow.<br>
              
              I also have facilities to attend and understand the client, to arrive as quickly as possible to their desired product.<br>

              I create successfull responsive websites that are fast, easy to use and with good design criteria, just like this :). <br>
              Visit my <span @click="goToWebPage" style="font-size: 18px" class="text-secondary cursor-pointer " clickable>
              Linkedln</span> profile for more details or just <span @click="$router.push('/contact')" style="font-size: 18px" class="text-secondary cursor-pointer " clickable>
                contact me.
              </span>
                 
            </div>
          </div>
        </div>
        <div class="col-6  full-height" >
          
          <div class="row  justify-end" >                     
            <!-- <q-img class="absolute-bottom-right" width="520px" style="margin-right: 5%"  src="../assets/portfolio2.png"></q-img> -->
          </div>
        </div>        
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  methods: {
    goToWebPage() {

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
