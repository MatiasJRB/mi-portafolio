<template>
  <q-page  class="flex flex-center" :style=" !mobile ? 'padding-left: 130px' : ''" >
   <!-- Vista principal -->
    <div class="full-width" :style=" !mobile   ? 'height: 100vh' : ''">
      <div class="row justify-start  flex flex-center ">
        <div class="col-6 col-md-6 col-xs-12 col-sm-12  "  >
          
          <div class="q-ma-md">
            <div :class="getNameClass" style="" >
             Contact me
            </div>
            <div :class="getJobClass" >
              I'm interested in freelance opportunities, especially big ones, to take this with Geome7ric to make it better and bigger. 
              However, if you have another request or question, don't hesitate to use the form.
            </div>
            <div class="q-mt-xl  ">
              <div class="row justify-around ">
                <div class="col-6 col-md-6 col-xs-12 q-pa-xs">
                  <q-input v-model="form.name" clearable  class="" filled label="Name"/>
                </div>
                <div class="col-6 col-md-6  col-xs-12 q-pa-xs">
                  <q-input v-model="form.from" clearable class="" filled label="Email"/>
                </div>
              </div>
              <div class="row q-pa-xs ">
                <q-input v-model="form.subject" clearable class="full-width" filled label="Subject"/>
              </div>
              <div class="q-pa-xs">
                <q-input  v-model="form.text" clearable  :autogrow="false" type="textarea" filled label="Message" style="max-height: 250px"/>
              </div>
              <div class="row justify-end q-mt-sm">
                <q-btn @click="sendEmail" class="text-capitalize col-4 " outline color="secondary" label="Sent message!"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-6 col-xs-12  full-height">          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99611.232271834!2d-62.25637244999999!3d-38.72122955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcabdc1302bd%3A0x76d1d88d241e7a11!2sBah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1647766554503!5m2!1ses!2sar"
           style="border:0;height:100vh; width: 100%" allowfullscreen="" loading="lazy"></iframe>
        </div>        
      </div>
      
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        from: '',
        subject: '',
        to: process.env.EMAIL,
        text: ''
      }
    }
  },
  methods: {
    sendEmail () {
      this.$store.dispatch('account/sendEmail', this.form)
        .then(() => {
          alet('se envio correctamente')
        })
        .catch((error) => {
          alert('error')
          console.log(error)
        })
    }
  },
  components: {
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
      let ret = ' q-mt-xs'
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
