<template>
   <q-page class="flex flex-center ">
    <div class="full-width " :style=" mobile? 'height: 100%' : ''">
      <div class="row justify-start ">
        <div class="col-lg-6 col-xl-6 col-md-12 col-xs-12 col-sm-12  "  >
          
          <div class="q-pa-md">
            <div :class="getSkillsName" style="" >
              Skills & experience
            </div>
            <div :class="getTextClass" style="line:height: 130%" >
              Since beginning my journey as a freelance developer nearly 3 years ago, I’ve done work for diferent kind of clients, alone and with talented people, 
              to create products for both business and consumer use. <br>
              With Geome7ric, we made engineer quality products for supply any kind of client requirement.<br>
              Personally, I can carry out big projects from architectual design to the deployment, going through settings ups, development and organizing workflow.<br>
              
              I also have facilities to attend and understand the client, to arrive as quickly as possible to their desired product.<br>

              I create successfull responsive websites that are fast, easy to use and with good design criteria, just like this :). <br>
              <span @click="goTo('contact')" style="font-size: 18px" class="text-secondary cursor-pointer " clickable>
                Contact me
              </span> for more details
                 
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-6 col-md-6 col-xs-12 col-sm-12"  >
          
          <div class="row q-pa-md justify-start "  > 
            <div class="col-6   "  > 
              <div class="row q-ma-sm skill">
                <q-icon size="32px" class="q-ma-sm q-ml-md"  name="preview"/>
                <div class="flex flex-center q-ml-md">
                  <span class="">
                    Front-end
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6   "  > 
              <div class="row q-ma-sm skill">
                <q-icon size="32px" class="q-ma-sm q-ml-md"  name="settings_suggest"/>
                <div class="flex flex-center q-ml-md">
                  <span class="">
                    Back-end
                  </span>
                </div>
              </div>
            </div>                      
            <div :class="mobile? 'col-12' :'col-6'"  > 
              <div class="row q-ma-sm skill">
                <q-icon size="32px" class="q-ma-sm q-ml-md"  name="psychology"/>
                <div class="flex flex-center q-ml-xl">
                  <span class="">
                    UX design
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6   "  > 
              <div class="row q-ma-sm skill">
                <q-icon size="32px" class="q-ma-sm q-ml-md"  name="group"/>
                <div class="flex flex-center q-ml-md">
                  <span class="">
                    Leader
                  </span>
                </div>
              </div>
            </div>
            <div class="col-6   "  > 
              <div class="row q-ma-sm skill">
                <q-icon size="32px" class="q-ma-sm q-ml-md"  name="compare"/>
                <div class="flex flex-center q-ml-xs">
                  <span class="">
                    Media editing
                  </span>
                </div>
              </div>
            </div>
            <div class="text-center q-my-md">Here are a few technologies I've working with recently</div>
            <div :class="mobile? 'col-12' :'col-6'"  > 
              <div class="row q-ma-sm skill " style="border-color: #4292F0;">
                <q-img height="40px" contain class="col-2 q-ml-md q-mt-xs " src="../assets/quasar.svg"/>
                <div class="col-9 text-center flex flex-center" style="color: #4292F0;">
                  <span class="">
                    Quasar Framework
                  </span>
                </div>
              </div>
            </div>
            <div :class="mobile? 'col-12' :'col-6'"  > 
              <div class="row q-ma-sm skill " style="border-color: #61dafb;">
                <q-img height="40px" contain class="col-2 q-ml-md q-mt-xs " src="../assets/reactnative.svg"/>
                <div class="col-9 text-center flex flex-center" style="color: #61dafb;">
                  <span class="">
                    React Native
                  </span>
                </div>
              </div>
            </div>
            <div :class="mobile? 'col-12' :'col-6'"  > 
              <div class="row q-ma-sm skill " style="border-color: #5AAD45;">
                <q-img contain class="col-2 q-ml-md " src="../assets/nodejs.svg"/>
                <div class="col-9 text-center flex flex-center " style="color: #5AAD45;">
                  <span class="">
                    Node JS
                  </span>
                </div>
              </div>
            </div>            
            <div :class="mobile? 'col-12' :'col-6'"  > 
              <div class="row q-ma-sm skill " style="border-color: #FF2D20;">
                <q-img height="40px" contain class="col-2 q-ml-md q-mt-xs" src="../assets/Laravel.svg"/>
                <div class="col-9 text-center flex flex-center" style="color: #FF2D20;">
                  <span class="">
                    Laravel
                  </span>
                </div>
              </div>
            </div>            
            
          </div>
          
        </div>        
      </div>
      
    </div>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  // name: 'PageName',
  methods: {
    openURL(url) {
      openURL(url)
    },
    goTo(path) {
      this.$emitter.emit('listener_principal', {
        function: 'scrollTo',
        data: path
      })
    }
  },
  computed: {
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
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
