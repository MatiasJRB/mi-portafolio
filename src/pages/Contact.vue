<template>
  <q-page  class="flex flex-center ">
    <div class="full-width " :style=" mobile? 'height: 100%' : ''">
      <div class="row justify-start  ">
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  " :style="mobile? '': ''" >
          
          <div class="q-pa-md">
            <div :class="getNameClass" style="" >
             Contact me
            </div>
            <!-- <SocialMedia :behavior="' justify-around '" class="q-my-md full-width"/> -->
            
            
            <div :class="getJobClass" >
              I'm interested in freelance opportunities, especially big ones, to take this with Geome7ric to make it better and bigger. 
              However, if you have another request or question, don't hesitate to use the form or
              
            <span @click="useOpenURL('mailto:matiasjriosb@gmail.com')"  class="text-secondary cursor-pointer " clickable>
              use your email client
            </span>.
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6 col-xs-12 " > 
            
              <div class=" ">
                <div class="row justify-around ">
                  <div class="col-6 col-md-6 col-xs-12 q-pa-xs">
                    <q-input dark  v-model="form.name" label-color="white" filled label="Name"/>
                  </div>
                  <div class="col-6 col-md-6  col-xs-12 q-pa-xs">
                    <q-input dark v-model="form.from"  label-color="white" filled label="Email"/>
                  </div>
                </div>
                <div class="row q-pa-xs ">
                  <q-input dark densez v-model="form.subject" class="full-width"  label-color="white" filled label="Subject"/>
                </div> 
                <q-editor dark class=" q-mx-xs no-shadow"
                 v-model="form.html" label="Message" min-height="5rem" />
                <div class="row justify-center q-mt-sm">
                  <q-btn :loading="seendingMessage" @click="sendEmail"
                  class="text-capitalize  "
                  style="width:98%"
                  outline color="white" label="Sent message!"/>
                </div>
              </div>        
         
        </div>        
      </div>
      
    </div>
  </q-page >
</template>

<script>

import SocialMedia from '../components/SocialMedia.vue'
import { openURL } from 'quasar'


export default {
  data () {
    return {
      seendingMessage: false,
      form: {
        name: '',
        from: '',
        subject: '',
        to: process.env.EMAIL,
        text: '',
        html: ''
      }
    }
  },
  methods: {

    useOpenURL(url) {
      openURL(url)
    },
    resetForm() {
      this.form = {
        name: '',
        from: '',
        subject: '',
        text: '',
        html: ''
      } 
    },
    sendEmail () {
      this.seendingMessage = true
      this.$store.dispatch('account/sendEmail', this.form)
        .then(() => {
          this.$emitter.emit('positiveNotify', 'Your email was sent successfully')
          this.resetForm()
        })
        .catch((error) => {
          console.log(error)
          let errMessage = error.response?.data?.message
          errMessage = errMessage || 'Please, try again later'
          this.$emitter.emit('negativeNotify', errMessage)
        })
        .finally(() => {
          this.seendingMessage = false
        })
    }
  },
  components: {
    // SocialMedia
  },
  computed: {
    mobile () {
      let ret = false
      ret = this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050
      return ret
    },
    getNameClass() {
      let ret = 'text-weight-bold  '
      if (this.$q.screen.xl) {
        ret = ret + ' text-h2'
      } else {
        ret = ret + ' text-h3'
      }
      return ret
    },
    getJobClass() {
      let ret = ' q-mt-md'
      if (this.$q.screen.xl) {
        ret = ret + ' text-subtitle1'
      } else {
        ret = ret + ' text-subtitle1'
      }
      return ret
    },
  }
}
</script>
